const fs = require('fs');
const path = require('path');
const glob = require('glob');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src');

function processFile(file) {
  const code = fs.readFileSync(file, 'utf8');
  const ast = parser.parse(code, {
    sourceType: 'module',
    plugins: ['typescript', 'jsx']
  });

  let modified = false;

  traverse(ast, {
    JSXOpeningElement(pathNode) {
      const opening = pathNode.node;
      let styleAttrIndex = -1;
      let classAttrIndex = -1;

      opening.attributes.forEach((attr, idx) => {
        if (!attr) return;
        if (t.isJSXAttribute(attr) && t.isJSXIdentifier(attr.name)) {
          if (attr.name.name === 'style') styleAttrIndex = idx;
          if (attr.name.name === 'className') classAttrIndex = idx;
        }
      });

      if (styleAttrIndex === -1) return;

      const styleAttr = opening.attributes[styleAttrIndex];
      if (!t.isJSXAttribute(styleAttr) || !t.isJSXExpressionContainer(styleAttr.value)) return;
      const expr = styleAttr.value.expression;
      if (!t.isObjectExpression(expr)) return;

      // find fontFamily property
      const props = expr.properties;
      let fontPropIndex = -1;
      let fontValue = null;
      for (let i = 0; i < props.length; i++) {
        const p = props[i];
        if (t.isObjectProperty(p) && (t.isIdentifier(p.key) || t.isStringLiteral(p.key))) {
          const keyName = t.isIdentifier(p.key) ? p.key.name : p.key.value;
          if (keyName === 'fontFamily') {
            fontPropIndex = i;
            if (t.isStringLiteral(p.value)) fontValue = p.value.value;
            else if (t.isTemplateLiteral(p.value)) fontValue = p.value.quasis.map(q => q.value.cooked).join('');
            else if (t.isLiteral && p.value && p.value.value) fontValue = p.value.value;
            break;
          }
        }
      }

      if (fontPropIndex === -1 || !fontValue) return;

      let fontClass = null;
      if (fontValue.includes('Patrick Hand')) fontClass = 'font-patrick';
      else if (fontValue.includes('Leckerli One')) fontClass = 'font-leckerli';

      if (!fontClass) return;

      // remove the fontFamily property from style object
      expr.properties.splice(fontPropIndex, 1);
      modified = true;

      // if style object now empty, remove the whole style attribute
      if (expr.properties.length === 0) {
        opening.attributes.splice(styleAttrIndex, 1);
        // adjust classAttrIndex if necessary
        if (classAttrIndex > styleAttrIndex) classAttrIndex--;
      } else {
        // keep style attribute (with other inline styles)
        // nothing else to do
      }

      // handle className: append or create
      if (classAttrIndex === -1) {
        // create new className attribute
        const newAttr = t.jsxAttribute(
          t.jsxIdentifier('className'),
          t.stringLiteral(fontClass)
        );
        opening.attributes.push(newAttr);
      } else {
        const classAttr = opening.attributes[classAttrIndex];
        if (!t.isJSXAttribute(classAttr)) return;
        const val = classAttr.value;
        if (!val) {
          // className without value? set to fontClass
          classAttr.value = t.stringLiteral(fontClass);
        } else if (t.isStringLiteral(val)) {
          // simple string literal
          val.value = val.value + ' ' + fontClass;
        } else if (t.isJSXExpressionContainer(val)) {
          // expression - try to handle simple string literal expressions
          const exprVal = val.expression;
          if (t.isStringLiteral(exprVal)) {
            val.expression = t.stringLiteral(exprVal.value + ' ' + fontClass);
          } else {
            // fallback: convert to template literal: `${...} fontClass`
            classAttr.value = t.jsxExpressionContainer(
              t.templateLiteral([
                t.templateElement({ raw: '', cooked: '' }, false),
                t.templateElement({ raw: ' ' + fontClass, cooked: ' ' + fontClass }, true)
              ], [exprVal])
            );
          }
        }
      }
    }
  });

  if (modified) {
    const output = generate(ast, { /* options */ }, code).code;
    fs.writeFileSync(file, output, 'utf8');
    console.log('Updated', file);
  }
}

function run() {
  const files = glob.sync(path.join(SRC, '**/*.tsx'));
  files.forEach(processFile);
}

run();
