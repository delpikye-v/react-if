import n from"react";var e=function(){return e=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var l in e=arguments[t])Object.prototype.hasOwnProperty.call(e,l)&&(n[l]=e[l]);return n},e.apply(this,arguments)},t=function(e){var t=e.condition,r=e.children;return a(t)?n.createElement(n.Fragment,null,r):null},r=function(e){var t=e.condition,r=e.children;if(!r)return null;var l=a(t),f=function(e,t){var r=[],l=[],f=[],s=!0;return n.Children.forEach(e,(function(e){if(n.isValidElement(e)){var i=e.props.condition;switch(e.type){case c:return void(t&&r.push(e));case o:return s=!1,void(!t&&a(i)&&l.push(e));case u:return s=!1,void(t||(s=!1,f.push(e)))}}})),i(r.length>1||l.length>1||f.length>1,"Multiple <Then /> or <ElseIf /> or <Else /> blocks found in <If />. Only the first will be rendered."),{tag:r[0]||l[0]||f[0],isSingle:s}}(r,l),s=f.tag,h=f.isSingle;return l&&h?n.createElement(n.Fragment,null,r):n.createElement(n.Fragment,null,s)},l=function(e){var t=e.children;if(!t)return null;var r,l,o,u=(r=t,l=[],o=[],n.Children.forEach(r,(function(e){if(n.isValidElement(e)){var t=e.props.condition;switch(e.type){case s:return void(a(t)&&l.push(e));case f:return void o.push(e)}}})),i(l.length>1||o.length>1,"Must contain exactly one <Case /> or <Default /> block."),{tagCase:l[0],tagDefault:o[0]}),c=u.tagCase,h=u.tagDefault;return n.createElement(n.Fragment,null,c||h)};function a(n){return Boolean("function"==typeof n?n():n)}function i(n,e){if(n){"undefined"!=typeof console&&console.warn(e);try{throw new Error(e)}catch(n){}}}var o=function(t){return n.createElement(r,e({},t))},u=function(e){var t=e.children;return n.createElement(n.Fragment,null,t)},c=function(e){var t=e.children;return n.createElement(n.Fragment,null,t)},f=function(e){var t=e.children;return n.createElement(n.Fragment,null,t)},s=function(e){var t=e.children;return n.createElement(n.Fragment,null,t)};export{s as Case,f as Default,u as Else,o as ElseIf,r as If,l as Switch,c as Then,t as When};
