// Pool of user name strings to pull from, generated from https://jimpix.co.uk/words/random-username-generator.asp
const namePool = [
  'oxyacanthaeavocet',
  'agabusmussel',
  'dryobateskangaroo',
  'polyglottaroedeer',
  'crispuscaribou',
  'palustrissheldrake',
  'squatarolagreyhound',
  'limnodromuswigeon',
  'plebejusshrimp',
  'archanaraarcherfish',
  'locustellahyena',
  'bucanetespintail',
  'verrucivoruschicken',
  'attulusturtledove',
  'dermocorynuspolecats',
  'biatoridiumflamingo',
  'fuscapolarbear',
  'malacosomagnu',
  'balticaorangutan',
  'rubrasmelt',
  'oenanthemeerkat',
  'ammotraguswalrus',
  'omphiscolahart',
  'rutilalice',
  'ochrataraven',
  'cyanechough',
  'pelagicusjay',
  'adippehamster',
  'melanthiaponie',
  'shastensischamois',
  'harringtoniwidgeon',
  'poutassouredwing',
  'homomalliumcardinal',
  'piscatoriusopossum',
  'anglicaunicorn',
  'macrocephalaibexe',
  'anomodondolphin',
  'castaneusbass',
  'albipeshorse',
  'circusteal',
  'heliothisbutterfly',
  'putoriusgoose',
  'oceanicusyak',
  'amylaceaferret',
  'amplusanaconda',
  'philadelphiacormorant',
  'stelleristoat',
  'schistisaguselephant',
  'scitulumlark',
  'pleschankakitten'
];
// Pool of thought strings to pull from, generated from https://loremipsum.io/
const thoughtPool = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Interdum varius sit amet mattis vulputate.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tincidunt vitae semper quis. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Curabitur gravida arcu ac tortor. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus a.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices eros in cursus turpis massa tincidunt dui. Morbi enim nunc faucibus a.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin tempor id eu nisl. Ut aliquam purus sit amet.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Nibh tortor id aliquet lectus proin nibh nisl.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A condimentum vitae sapien pellentesque. Enim diam vulputate ut pharetra.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat vivamus at augue eget arcu dictum. Diam vulputate ut pharetra sit amet aliquam id.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed sed risus pretium quam vulputate. Viverra suspendisse potenti nullam ac tortor.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit ut tortor pretium viverra suspendisse potenti. Massa placerat duis ultricies lacus sed turpis tincidunt.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Auctor elit sed vulputate mi.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nullam non nisi est sit amet. Convallis convallis tellus id interdum velit laoreet. Viverra nibh cras pulvinar mattis nunc sed.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet justo donec enim diam vulputate ut pharetra sit. Nec feugiat in fermentum posuere urna. Massa id neque aliquam vestibulum morbi blandit cursus risus.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo duis ut diam quam nulla porttitor massa. Etiam non quam lacus suspendisse faucibus interdum. Sed libero enim sed faucibus turpis.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In ornare quam viverra orci sagittis. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Lobortis elementum nibh tellus molestie nunc non.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in massa tempor nec feugiat nisl pretium fusce id. Vitae congue eu consequat ac felis donec et odio. Pharetra sit amet aliquam id diam.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique et egestas quis ipsum suspendisse ultrices gravida. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Volutpat est velit egestas dui id.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum. Amet luctus venenatis lectus magna fringilla. Sed id semper risus in hendrerit gravida rutrum quisque non.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam sem et tortor consequat id. In hac habitasse platea dictumst quisque. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Morbi tristique senectus et netus. Lacinia quis vel eros donec ac.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt praesent semper feugiat nibh sed. Auctor elit sed vulputate mi sit. Vitae elementum curabitur vitae nunc sed velit.'
];
// Pool of reaction strings to pull from, generated from https://loremipsum.io/
const reactionPool = [
  'erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin',
  'suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra',
  'quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum',
  'dui sapien eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum',
  'mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in',
  'quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis',
  'netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique magna sit amet purus gravida quis blandit',
  'tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc',
  'quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper',
  'ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet',
  'vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum',
  'purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel',
  'amet consectetur adipiscing elit pellentesque',
  'nibh venenatis cras sed felis',
  'mauris rhoncus aenean vel elit',
  'augue mauris augue neque gravida',
  'convallis aenean et tortor at',
  'malesuada bibendum arcu vitae elementum',
  'sagittis orci a scelerisque purus',
  'id diam maecenas ultricies mi',
  'ac turpis egestas maecenas pharetra',
  'neque egestas congue quisque egestas',
  'vestibulum lectus mauris ultrices eros',
  'vestibulum rhoncus est pellentesque elit',
  'tortor at risus viverra adipiscing',
  'in fermentum posuere urna nec',
  'auctor elit sed vulputate mi',
  'volutpat diam ut venenatis tellus',
  'convallis convallis tellus id interdum'
];

// Generate an user object to be seeded into the db
const generateUserObj = () => {
  const name = namePool[Math.floor(Math.random() * namePool.length)];
  const useremail = `${name}@gmail.com`;
  return {username: name, email: useremail};
}

/* Generate a reaction to be added to a thought obj,
  takes a username parameter */
const generateReactionObj = (name) => {
  /* Each object needs the following keys
    reactionBody, username
   */
  const text = reactionPool[Math.floor(Math.random() * reactionPool.length)];
  return {reactionBody: text, username: name};
}

/* Generate a thought object to be seeded into the db,
  takes a username parameter*/
const generateThoughtObj = (name) => {
  /* Each object needs the following keys
    thoughtText, username, reactions
  */
  const text = thoughtPool[Math.floor(Math.random() * thoughtPool.length)];
  return {thoughtText: text, username: name};
}

module.exports = { generateUserObj, generateThoughtObj, generateReactionObj };