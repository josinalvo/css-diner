var levels = [
  {
    helpTitle : "Selecione elementos pelo tipo do marcador",
    selectorName : "Seletor de marcador",
    doThis : "Selecione os <prato>",
    selector : "prato",
    syntax : "A",
    help : "Seleciona todos os elementos que tem o marcador <strong>A</strong>. Exemplos: <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> são tipos de marcador.",
    examples : [
      '<strong>div</strong> seleciona todos os elementos <tag>div</tag>.',
      '<strong>p</strong> seleciona todos os elementos <tag>p</tag>.',
    ],
    boardMarkup: `
    <prato/>
    <prato/>
    <tomate/>
    <prato/>
    `
  },
  {
    doThis : "Selecione o prato chique (duas soluções!)",
    selector : "#chique",
    selectorName: "Seletor por ID",
    helpTitle: "Seleciona elementos por id",
    syntax: "#id",
    help : 'Selects the element with a specific <strong>id</strong>. You can also combine the ID selector with the type selector.',
    help : 'Seleciona o elemento com a  <strong>id</strong> dada. Podemos combinar o seletor por ID com um seletor por tipo',
    examples : [
      '<strong>#cool</strong> seleciona qualquer elemento com <strong>id="cool"</strong>',
      '<strong>ul#long</strong> seleciona <tag>ul id="long"</tag>'
    ],
    boardMarkup : `
    <prato id="chique"/>
    <prato/>
    <bento/>
    `
  },
  {
    helpTitle: "Selecione um elemento dentro de outro",
    selectorName : "Seletor de descendente",
    doThis : "Selecione o tomate dentro do prato",
    selector : "prato tomate",
    syntax: "A&nbsp;&nbsp;B",
    help : "Seleciona todos os <strong>B</strong> que estejam dentro de um <strong>A</strong>. <strong>B</strong> é chamado de elemento descendente, por estar dentro de outro elemento",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> seleciona todos os <tag>strong</tag> que estejam dentro de algum elemento p <tag>p</tag>',
      '<strong>#chique&nbsp;&nbsp;span</strong> seleciona todos os <tag>span</tag> que estejam dentro de um elemento com <strong>id="chique"</strong>',
    ],
    boardMarkup : `
    <bento/>
    <prato>
      <tomate/>
    </prato>
    <tomate/>
    `
  },
  {
    doThis : "Selecione o picles dentro de um prato chique",
    selector : "#chique picles",
    helpTitle: "Combinar o por id e o por tipo, usando o descendente",
    syntax: "#id&nbsp;&nbsp;A",
    help : 'Você pode combinar quaisquer 2 seletores usando o descendente.',
    examples : [
      '<strong>#cool&nbsp;span</strong> seleciona todos os marcadores <tag>span</tag>  que estejam dentro de elementos com o atributo id dado (<strong>id="cool"</strong>)'
    ],
    boardMarkup : `
    <bento>
    <laranja/>
    </bento>
    <prato id="chique">
      <picles/>
    </prato>
    <prato>
      <picles/>
    </prato>
    `
  },
  {
    doThis : "Selecione os tomates pequenos (classe small)",
    selector : ".small",
    selectorName: "Seletor de classe",
    helpTitle: "Seleciona elementos pelo atributo classe",
    syntax: ".nomedaclasse",
    help : 'O seletor de classe seleciona todos os elementos que tenham a classe escolhida',
    examples : [
    '<strong>.promocao</strong> seleciona todos os elementos com <strong>class="promocao"</strong>'
    ],
    boardMarkup : `
    <tomate/>
    <tomate class="small"/>
    <prato>
      <tomate class="small"/>
    </prato>
    <prato/>
    `
  },
  {
    doThis : "Selecione as laranjas pequenas (classe small)",
    selector : "laranja.small",
    helpTitle: "Juntar seletor de classe e de tipo",
    syntax: "A.nomeDaClasse",
    help : 'You can combine the class selector with other selectors, like the type selector.',
    help : 'Você pode combinar o seletor de classe com outros seletores, como o de tipo',
    examples : [
      '<strong>ul.importante</strong> seleciona todos os elementos <tag>ul</tag> que tenham <strong>class="importante"</strong>',
      '<strong>#grande.largo</strong> seleciona todos os elementos que tenham <strong>id="grande"</strong> e também tenham <strong>class="largo"</strong>'
    ],
    boardMarkup :`
    <tomate/>
    <tomate class="small"/>
    <bento>
      <laranja class="small"/>
    </bento>
    <prato>
      <laranja/>
    </prato>
    <prato>
      <laranja class="small"/>
    </prato>`
  },
  {
    doThis : "Selecione as laranjas pequenas dentro de bentos",
    selector : "bento laranja.small",
    syntax: "Estamos juntando as coisas de antes!",
    helpTitle: "Mete bronca!",
    help : 'Basta pensar no que você viu nos níveis anteriores.',
    boardMarkup : `
    <bento>
      <laranja/>
    </bento>
    <laranja class="small"/>
    <bento>
      <laranja class="small"/>
    </bento>
    <bento>
      <tomate class="small"/>
    </bento>
    <bento>
      <laranja class="small"/>
    </bento>
    `
  },
  {
    doThis : "Selecione todos os pratos e todos os bentos",
    selector : "prato,bento",
    selectorName : "Virgula",
    helpTitle: "Combine, seletores, com, virgula!",
    syntax : "A, B",
    help : 'Seleciona todos os elementos do tipo <strong>A</strong>, e todos os elmentos do tipo <strong>B</strong>',
    examples: [
    '<strong>p, .fun</strong> seleciona todos os elementos do tipo <tag>p</tag> e também todos os elementos com <strong>class="fun"</strong>',
    '<strong>a, p, div</strong> seleciona todos os elementos dos três tipos: <tag>a</tag>, <tag>p</tag> e <tag>div</tag>'
    ],
    boardMarkup : `
    <picles class="small"/>
    <picles/>
    <prato>
      <picles/>
    </prato>
    <bento>
      <picles/>
    </bento>
    <prato>
      <picles/>
    </prato>
    <picles/>
    <picles class="small"/>
    `
  },
  {
    doThis : "Selecionar tudo!",
    selector : "*",
    selectorName:  "Seletor universal",
    helpTitle: "Você pode selecionar tudo da página!",
    syntax : "*",
    help : 'Para selecionar todos os elementos, é só usar *',
    examples : [
      '<strong>p *</strong> seleciona qualquer elemento que esteja dentro de um elemento <tag>p</tag>.',
    ],
    boardMarkup : `
    <tomate/>
    <prato>
      <laranja class="small" />
    </prato>
    <bento/>
    <bento>
      <laranja/>
    </bento>
    <prato id="chique"/>
    `
  },
  {
    doThis : "Selecione tudo dentro de um prato",
    selector : "prato *",
    syntax : "A&nbsp;&nbsp;*",
    helpTitle: "Combine o seletor universal",
    help : 'Seleciona tudo que estiver dentro de um <strong>A</strong>.',
    examples : [
      '<strong>p *</strong> seleciona todos os elementos que estejam dentro de algum <tag>p</tag>.',
      '<strong>ul.chique *</strong> seleciona todos os elementos que estejam dentro de algum <tag>ul class="chique"</tag> (i.e.: dentro de algum ul que tenha a classe chique)'
    ],
    boardMarkup: `
    <prato id="chique">
      <laranja class="small"/>
    </prato>
    <prato>
      <picles/>
    </prato>
    <tomate class="small"/>
    <prato>
      <tomate/>
    </prato>`
  },
  {
    doThis : "Selecione todos os tomates que venham logo após um prato",
    selector : "prato + tomate",
    helpTitle: "Selecione todos os elementos que venham depois de algo",
    selectorName: "Seletor de irmão adjancente",
    syntax : "A + B",
    help : "Seleciona todos os elementos <strong>B</strong> que vem logo depois de um  <strong>A</strong>. Elementos que estão dentro de um mesmo elemento pai são chamados irmmãos. Eles estão no mesmo nível, na mesma profundidade<br/><br/>Olhando o nosso código HTML, os elementos que tem a mesma identação estão no mesmo nível.",
    examples : [
      '<strong>p + .intro</strong> seleciona todo elemento com <strong>class="intro"</strong> que vem logo depois de um <tag>p</tag>',
      '<strong>div + a</strong> seleciona todos os <tag>a</tag> que vem logo depois de algum <tag>div</tag>'
    ],
    boardMarkup : `
    <bento>
      <tomate class="small"/>
    </bento>
    <prato />
    <tomate class="small"/>
    <prato />
    <tomate/>
    <tomate class="small"/>
    <tomate class="small"/>
    `
  },
  {
    selectorName: "Seletor geral de irmão",
    helpTitle: "Seleciona elementos que seguem algum elemento, no mesmo nível",
    syntax: "A ~ B",
    doThis : "Selecione os picles que vem após o bento",
    selector : "bento ~ picles",
    help : "You can select all siblings of an element that follow it. This is like the Adjacent Selector (A + B) except it gets all of the following elements instead of one.",
    help : "Você pode selecionar todos os irmãos de um elemento que venham depois dele. Isso é parecido com o seletor de irmão adjacente, mas pega todos os elementos depois de A que estejam no mesmo nível e tenham o mesmo pai.",
    examples : [
      '<strong>A ~ B</strong> seleciona todos os <strong>B</strong> que vierem depois de um <strong>A</strong>'
    ],
    boardMarkup : `
    <picles/>
    <bento>
      <laranja class="small"/>
    </bento>
    <picles class="small"/>
    <picles/>
    <prato>
      <picles/>
    </prato>
    <prato>
      <picles class="small"/>
    </prato>
    `
  },
  /*
  {
    selectorName: "Child Selector",
    syntax: "A > B&nbsp;",
    doThis : "Select the tomate directly on a prato",
    selector : "prato > tomate",
    helpTitle: "Select direct children of an element",
    help : "You can select elements that are direct children of other elements. A child element is any element that is nested directly in another element. <br><br>Elements that are nested deeper than that are called descendant elements.",
    examples : [
      '<strong>A > B</strong> selects all <strong>B</strong> that are a direct children <strong>A</strong>'
    ],
    boardMarkup: `
    <prato>
      <bento>
        <tomate/>
      </bento>
    </prato>
    <prato>
      <tomate/>
    </prato>
    <prato/>
    <tomate/>
    <tomate class="small"/>
    `
  },
  {
    selectorName: "First Child Pseudo-selector",
    helpTitle: "Select a first child element inside of another element",
    doThis : "Select the top laranja",
    selector : "prato :first-child",
    syntax: ":first-child",

    help : "You can select the first child element. A child element is any element that is directly nested in another element. You can combine this pseudo-selector with other selectors.",
    examples : [
      '<strong>:first-child</strong> selects all first child elements.',
      '<strong>p:first-child</strong> selects all first child <tag>p</tag> elements.',
      '<strong>div p:first-child</strong> selects all first child <tag>p</tag> elements that are in a <tag>div</tag>.'
    ],
    boardMarkup :`
    <bento/>
    <prato />
    <prato>
      <laranja />
      <laranja />
      <laranja />
    </prato>
    <picles class="small" />
    `
  },
  {
    selectorName: "Only Child Pseudo-selector",
    helpTitle: "Select an element that are the only element inside of another one.",
    doThis : "Select the tomate and the picles on the pratos",
    selector : "prato :only-child",
    syntax: ":only-child",
    help : "You can select any element that is the only element inside of another one.",
    examples : [
      '<strong>span:only-child</strong> selects the <tag>span</tag> elements that are the only child of some other element.',
      '<strong>ul li:only-child</strong> selects the only <tag>li</tag> element that are in a <tag>ul</tag>.'
    ],
    boardMarkup : `
    <prato>
      <tomate/>
    </prato>
    <prato>
      <picles />
    </prato>
    <bento>
      <picles />
    </bento>
    <prato>
      <laranja class="small"/>
      <laranja/>
    </prato>
    <picles class="small"/>
    `
  },
  {
    selectorName: "Last Child Pseudo-selector",
    helpTitle: "Select the last element inside of another element",
    doThis : "Select the small tomate and the picles",
    selector : ".small:last-child",
    syntax: ":last-child",
    help : "You can use this selector to select an element that is the last child element inside of another element. <br><br>Pro Tip &rarr; In cases where there is only one element, that element counts as the first-child, only-child and last-child!",
    examples : [
      '<strong>:last-child</strong> selects all last-child elements.',
      '<strong>span:last-child</strong> selects all last-child <tag>span</tag> elements.',
      '<strong>ul li:last-child</strong> selects the last <tag>li</tag> elements inside of any <tag>ul</tag>.'
    ],
    boardMarkup : `
    <prato id="chique">
      <tomate class="small"/>
    </prato>
    <prato/>
    <prato>
      <laranja class="small"/>
      <laranja>
    </prato>
    <picles class="small"/>`
  },
  {
    selectorName: "Nth Child Pseudo-selector",
    helpTitle: "Select an element by its order in another element",
    doThis : "Select the 3rd prato",
    selector : ":nth-child(3)",
    syntax: ":nth-child(A)",
    help : "Selects the <strong>nth</strong> (Ex: 1st, 3rd, 12th etc.) child element in another element.",
    examples : [
      '<strong>:nth-child(8)</strong> selects every element that is the 8th child of another element.',
      '<strong>div p:nth-child(2)</strong> selects the second <strong>p</strong> in every <strong>div</strong>',
    ],
    boardMarkup : `
    <prato/>
    <prato/>
    <prato/>
    <prato id="chique"/>
    `
  },
  {
    selectorName: "Nth Last Child Selector",
    helpTitle: "Select an element by its order in another element, counting from the back",
    doThis : "Select the 1st bento",
    selector : "bento:nth-last-child(3)",
    syntax: ":nth-last-child(A)",
    help : "Selects the children from the bottom of the parent. This is like nth-child, but counting from the back!",
    examples : [
      '<strong>:nth-last-child(2)</strong> selects all second-to-last child elements.'
    ],
    boardMarkup: `
    <prato/>
    <bento/>
    <prato>
      <laranja/>
      <laranja/>
      <laranja/>
    </prato>
    <bento/>
    `
  },
  {
    selectorName: "First of Type Selector",
    helpTitle: "Select the first element of a specific type",
    doThis : "Select first tomate",
    selector : "tomate:first-of-type",
    syntax: ":first-of-type",
    help : "Selects the first element of that type within another element.",
    examples : [
      '<strong>span:first-of-type</strong> selects the first <tag>span</tag> in any element.'
    ],
    boardMarkup: `
    <laranja class="small"/>
    <tomate/>
    <tomate class="small"/>
    <tomate/>
    <tomate class="small"/>
    <prato>
      <laranja class="small"/>
      <laranja/>
    </prato>
    `
  },
  {
    selectorName: "Nth of Type Selector",
    doThis: "Select all even pratos",
    selector: "prato:nth-of-type(even)",
    syntax: ":nth-of-type(A)",
    help: "Selects a specific element based on its type and order in another element - or even or odd instances of that element.",
    examples: [
      '<strong>div:nth-of-type(2)</strong> selects the second instance of a div.',
      '<strong>.example:nth-of-type(odd)</strong> selects all odd instances of a the example class.'
    ],
    boardMarkup : `
    <prato/>
    <prato/>
    <prato/>
    <prato/>
    <prato id="chique"/>
    <prato/>
    `
  },
  {
    selectorName: "Nth-of-type Selector with Formula",
    doThis: "Select every 2nd prato, starting from the 3rd",
    selector: "prato:nth-of-type(2n+3)",
    syntax: ":nth-of-type(An+B)",
    help: "The nth-of-type formula selects every nth element, starting the count at a specific instance of that element.",
    examples: [
      '<strong>span:nth-of-type(6n+2)</strong> selects every 6th instance of a <tag>span</tag>, starting from (and including) the second instance.'
    ],
    boardMarkup : `
    <prato/>
    <prato>
      <picles class="small" />
    </prato>
    <prato>
      <tomate class="small" />
    </prato>
    <prato/>
    <prato>
      <tomate />
    </prato>
    <prato/>
    `
  },
  {
    selectorName: "Only of Type Selector",
    helpTitle: "Select elements that are the only ones of their type within their parent element",
    selector : "tomate:only-of-type",
    syntax: ":only-of-type",
    doThis : "Select the tomate on the middle prato",
    help : "Selects the only element of its type within another element.",
    examples : [
      '<strong>p span:only-of-type</strong> selects a <tag>span</tag> within any <tag>p</tag> if it is the only <tag>span</tag> in there.'
    ],
    boardMarkup: `
    <prato id="chique">
      <tomate class="small" />
      <tomate />
    </prato>
    <prato>
      <tomate class="small" />
    </prato>
    <prato>
      <picles />
    </prato>
    `
  },
  {
    selectorName: "Last of Type Selector",
    helpTitle: "Select the last element of a specific type",
    doThis : "Select the last tomate and laranja",
    selector : ".small:last-of-type",
    syntax: ":last-of-type",
    help : "Selects each last element of that type within another element. Remember type refers the kind of tag, so <tag>p</tag> and <tag>span</tag> are different types. <br><br> I wonder if this is how the last dinosaur was selected before it went extinct.",
    examples : [
      '<strong>div:last-of-type</strong> selects the last <tag>div</tag> in every element.',
      '<strong>p span:last-of-type</strong> selects the last <tag>span</tag> in every <tag>p</tag>.'
    ],
    boardMarkup : `
    <laranja class="small"/>
    <laranja class="small" />
    <picles />
    <picles />
    <tomate class="small" />
    <tomate class="small" />
    `
  },
  {
    selectorName: "Empty Selector",
    helpTitle: "Select elements that don't have children",
    doThis : "Select the empty bentos",
    selector : "bento:empty",
    syntax: ":empty",
    help : "Selects elements that don't have any other elements inside of them.",
    examples : [
      '<strong>div:empty</strong> selects all empty <tag>div</tag> elements.'
    ],
    boardMarkup:`
    <bento/>
    <bento>
      <picles class="small"/>
    </bento>
    <prato/>
    <bento/>`
  },
  {
    selectorName: "Negation Pseudo-class",
    helpTitle: "Select all elements that don't match the negation selector",
    doThis : "Select the big tomates",
    selector : "tomate:not(.small)",
    syntax: ":not(X)",
    help : 'You can use this to select all elements that do not match selector <strong>"X"</strong>.',
    examples : [
      '<strong>:not(#chique)</strong> selects all elements that do not have <strong>id="chique"</strong>.',
      '<strong>div:not(:first-child)</strong> selects every <tag>div</tag> that is not a first child.',
      '<strong>:not(.big, .medium)</strong> selects all elements that do not have <strong>class="big"</strong> or <strong>class="medium"</strong>.'
    ],
    boardMarkup: `
    <prato id="chique">
      <tomate class="small" />
    </prato>
    <prato>
      <tomate />
    </prato>
    <tomate />
    <prato>
      <laranja class="small" />
    </prato>
    <picles class="small" />
    `
  },
  {
    selectorName: "Attribute Selector",
    helpTitle: "Select all elements that have a specific attribute",
    doThis : "Select the items for someone",
    selector : "[for]",
    syntax: "[attribute]",
    help : 'Attributes appear inside the opening tag of an element, like this: <tag>span attribute="value"</tag>. An attribute does not always have a value, it can be blank!',
    examples : [
      '<strong>a[href]</strong> selects all <tag>a</tag> elements that have a <strong>href="anything"</strong> attribute.',
      '<strong>[type]</strong> selects all elements that have a <strong>type="anything"</strong>. attribute'
    ],
    boardMarkup:`
    <bento><tomate class="small"/></bento>
    <tomate for="Ethan"/>
    <prato for="Alice"><picles/></prato>
    <bento for="Clara"><laranja/></bento>
    <picles/>`
  },
  {
    selectorName: "Attribute Selector",
    helpTitle: "Select all elements that have a specific attribute",
    doThis : "Select the pratos for someone",
    selector : "prato[for]",
    syntax: "A[attribute]",
    help : "Combine the attribute selector with another selector (like the tag name selector) by adding it to the end.",
    examples : [
      '<strong>[value]</strong> selects all elements that have a <strong>value="anything"</strong> attribute.',
      '<strong>a[href]</strong> selects all <tag>a</tag> elements that have a <strong>href="anything"</strong> attribute.',
      '<strong>input[disabled]</strong> selects all <tag>input</tag> elements with the <strong>disabled</strong> attribute'
    ],
    boardMarkup:`
    <prato for="Sarah"><picles/></prato>
    <prato for="Luke"><tomate/></prato>
    <prato/>
    <bento for="Steve"><laranja/></bento>
    `
  },
  {
    selectorName: "Attribute Value Selector",
    helpTitle: "Select all elements that have a specific attribute value",
    doThis : "Select Vitaly's meal",
    selector : "[for=Vitaly]",
    syntax: '[attribute="value"]',
    help : "Attribute selectors are case sensitive, each character must match exactly.",
    examples : [
      '<strong>input[type="checkbox"]</strong> selects all checkbox input elements.'
    ],
    boardMarkup:`
    <tomate for="Alexei" />
    <bento for="Albina"><tomate /></bento>
    <bento for="Vitaly"><laranja/></bento>
    <picles/>
    `
  },
  {
    selectorName: "Attribute Starts With Selector",
    helpTitle: "Select all elements with an attribute value that starts with specific characters",
    doThis : "Select the items for names that start with 'Sa'",
    selector : '[for^="Sa"]',
    syntax: '[attribute^="value"]',
    // help : "You can use quotes around the value in the selector, or not&mdash;it's optional!",
    examples : [
      '<strong>.toy[category^="Swim"]</strong> selects elements with class <strong>toy</strong> and either <strong>category="Swimwear"</strong> or <strong>category="Swimming"</strong>.'
    ],
    boardMarkup: `
    <prato for="Sam"><picles/></prato>
    <bento for="Sarah"><tomate class="small"/></bento>
    <bento for="Mary"><laranja/></bento>
    `
  },
  {
    selectorName: "Attribute Ends With Selector",
    helpTitle: "Select all elements with an attribute value that ends with specific characters",
    doThis : "Select the items for names that end with 'ato'",
    selector : '[for$="ato"]',
    syntax: '[attribute$="value"]',
    help : '',
    examples : [
      '<strong>img[src$=".jpg"]</strong> selects all images display a <strong>.jpg</strong> image.',
    ],
    boardMarkup:`
    <tomate class="small"/>
    <bento for="Hayato"><picles/></bento>
    <tomate for="Ryota"></tomate>
    <prato for="Minato"><laranja/></prato>
    <picles class="small"/>
    `
  },
  {
    selectorName: "Attribute Wildcard Selector",
    helpTitle: "Select all elements with an attribute value that contains specific characters anywhere",
    syntax: '[attribute*="value"]',
    doThis : "Select the meals for names that contain 'obb'",
    selector : '[for*="obb"]',
    help : 'A useful selector if you can identify a common pattern in things like <strong>class</strong>, <strong>href</strong> or <strong>src</strong> attributes.',
    examples : [
      '<strong>img[src*="/thumbnails/"]</strong> selects all image elements that show images from the "thumbnails" folder.',
      '<strong>[class*="heading"]</strong> selects all elements with "heading" in their class, like <strong>class="main-heading"</strong> and <strong>class="sub-heading"</strong>'
    ],
    boardMarkup:`
    <bento for="Robbie"><tomate /></bento>
    <bento for="Timmy"><picles /></bento>
    <bento for="Bobby"><laranja /></bento>
    `
  }*/
];
