'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "angenor.github.io/.git/COMMIT_EDITMSG": "7eded54eacdbaa521b227d934f8d99be",
"angenor.github.io/.git/config": "d4f1a3997a252aeea7b50547ae6b58b1",
"angenor.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"angenor.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"angenor.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"angenor.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"angenor.github.io/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"angenor.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"angenor.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"angenor.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"angenor.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"angenor.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"angenor.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"angenor.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"angenor.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"angenor.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"angenor.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"angenor.github.io/.git/index": "4b3e45531cb1d351730f0c519fd3be45",
"angenor.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"angenor.github.io/.git/logs/HEAD": "cf1ba07208442947524f90550f8bd5b2",
"angenor.github.io/.git/logs/refs/heads/main": "cf1ba07208442947524f90550f8bd5b2",
"angenor.github.io/.git/logs/refs/remotes/origin/HEAD": "2fdeed77897424c3197a39b806183628",
"angenor.github.io/.git/logs/refs/remotes/origin/main": "909130036952194f7ac9aa0679d3b5bb",
"angenor.github.io/.git/objects/00/c286db1f2ee36667887ef7e2997bad18ade089": "9283349c40832f55140398ae6929f439",
"angenor.github.io/.git/objects/02/bbd029466f0630925d651305c751665a6cbade": "574966d5c5e73b6e9d0fdb43a3c59b14",
"angenor.github.io/.git/objects/03/485db8a74e1b98e3821a57128c4860f5dbf441": "7cf41b01dc163112f0daa0834a7bbf48",
"angenor.github.io/.git/objects/05/87ea5f874bc2f5440ade87f4c58848f0cba5cb": "2c7661f3b96c12e5c3db8941facd3ac0",
"angenor.github.io/.git/objects/09/f49735f258f05cfdb2b628a2b0360d907bd233": "9fe863e9710026327248f40def5521d8",
"angenor.github.io/.git/objects/0a/9febea99c2e7d8d918efbca609de091880b200": "d80de272c2f11eda8ac8f238547083fa",
"angenor.github.io/.git/objects/0a/cda709ce3680a286306d775341d058424a872b": "0173a3d1a9967a728a51bc9db2a8d903",
"angenor.github.io/.git/objects/0b/d947ab5a1c4fe721d6e4f2a6d5cba4184083f9": "bdc0f3d68902f26194d124e427e15880",
"angenor.github.io/.git/objects/0e/fb06eb038cc432c030d8007a08163e2c169d33": "c5d31383274a622d96f8f86417728ea3",
"angenor.github.io/.git/objects/0f/18bed2ab53a12ac0c6748dfadc3d7a66a55ad3": "da1d5bbc5d49a3eff0ac780c303291f5",
"angenor.github.io/.git/objects/13/ec985c92413979d63fc9d21c0a82bd322fc530": "136379be44569fea2dec960ecdf2556f",
"angenor.github.io/.git/objects/13/f0de37b1f8ab34533fcde93c944ae11556174a": "0a36eeff78efe3c9df1bbf39ec8ee384",
"angenor.github.io/.git/objects/14/c1059a8749800a6cf4ac3e4b71394d5ab68da5": "1216ce9004bf8f9de354d8ea208ad74a",
"angenor.github.io/.git/objects/17/2daecd3f1b3382926877525b8a4d423ea96147": "06016d5ab0b1fd368091d6bf0785d7f7",
"angenor.github.io/.git/objects/1b/83190a2e55508363df7d6c4488972791c0ce06": "7e670d31c7bf27884e93915fdd8333f3",
"angenor.github.io/.git/objects/1c/4236dff616f1bcbdd0fdb5b0dab43cf29ce05b": "f8064696d2ca8a9db9c9040ce5276530",
"angenor.github.io/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"angenor.github.io/.git/objects/22/3d68c02c45b2f4eca6545e009bde8fd600e5cc": "6b6dbc4bc789040aeae403dcad8129aa",
"angenor.github.io/.git/objects/22/dfe9a4b9da9f532846b27923b2db45c0aebeb9": "76dc0108793c8549c9de557dcf2ac12b",
"angenor.github.io/.git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
"angenor.github.io/.git/objects/25/cb4f23566ada3d8270617d6b05143717657e85": "9778feced3fbbfacd9edbccff2445afb",
"angenor.github.io/.git/objects/26/ba4329a8c22d19ad23767b7c496f8c70cce790": "cb3a0653007f8f61782e649ce545fa6a",
"angenor.github.io/.git/objects/28/d7fcf138631662629affe8af8886ec4711eea7": "6fb70100e0069b6d6d896cb93af4de2c",
"angenor.github.io/.git/objects/2a/59b4fa63f35c87c5a2f05fca6a477d71a409fc": "58de9bcd574589a1bc48d62f41d6a8f1",
"angenor.github.io/.git/objects/2c/df88177d873f304042c751129efafae4579dd3": "0b2971cf0a0960416edba0fe8beee8b6",
"angenor.github.io/.git/objects/2d/8edbd7b1ae42c3e0469e61d288147888a11d8b": "ebdac54450b9be95234478a713a8b29a",
"angenor.github.io/.git/objects/2d/b34055f7b761d1aac49ddad520ed2c79321481": "e40446425a315caf35e726234d5b760a",
"angenor.github.io/.git/objects/2f/9ae62576670c7614149dc6374d98fcb3bad90c": "8501a23dcbe7a65d409ce813647e928d",
"angenor.github.io/.git/objects/32/ff4259a05acf31a2709d4d6f1999720ab6bc20": "5d965e9ed4093fbd5e41eba611a46162",
"angenor.github.io/.git/objects/35/ae213f0a400044a456c831f842343ef1f74d8a": "06e2ab6aa0b849e104449e67dee84f31",
"angenor.github.io/.git/objects/36/1f8bd4d37fd575756fd1235c7a8e5b584c80e2": "81dfa762fccc7ceb5014270381ec4dca",
"angenor.github.io/.git/objects/39/5c4589dc14e9a95c35ba009baf6bddce927d1f": "86c92c7452ebea834868a3fe7a6263e9",
"angenor.github.io/.git/objects/3a/938550b409f659402363d77cb7e5eec45624a1": "2e00245fa19eef4f15d9b5a2807777d0",
"angenor.github.io/.git/objects/3b/d0401752dbbc71e0c6abe9503425d13fdba295": "b0d1b82777e542c1be0f0584b502c39f",
"angenor.github.io/.git/objects/3e/b97ef9344a96aef8d18f492c1f035ac46ea83a": "03524ec88bfe0a4caf2af5c864efeaf4",
"angenor.github.io/.git/objects/45/4a1a36596dac90e37f5c7e9c92095e3df391f3": "7dfee7914458f584f3828f687fe72a6e",
"angenor.github.io/.git/objects/46/1b9ea764700be7ebe7c505e5f3f53d63dff2bd": "df8d6ca08daab2b366c9ce9515a844a1",
"angenor.github.io/.git/objects/46/42ece612fdf084b124fb3361ce17cf39c5fcea": "f486afd63f9aa5ac97d999b47ff316ab",
"angenor.github.io/.git/objects/49/866393e69fe89b7d648c380f749636fcd75fcc": "38a5c62bbaf9319fb7d5b4235782df42",
"angenor.github.io/.git/objects/4a/9566d64b82ddd09252e74fe4326b14342304e6": "3384554a4c874452444faf85008a4d9e",
"angenor.github.io/.git/objects/4b/2c1782cff062cd215a8890b76e46b9908e33ee": "6f20f04b560a01ea8a5aa1601b3a717b",
"angenor.github.io/.git/objects/4c/5eaa2b4df0f1f287b71f32da1f83cdbaee89d4": "385a2681e50dbe5dfab57cf6407442ef",
"angenor.github.io/.git/objects/4d/340e5283e272f6c882c471293e65bc7ee31714": "6f82d110f97e473f8f376464743c0629",
"angenor.github.io/.git/objects/50/1c20359ad064e69c85f80f8ac342f2d781224f": "ee999e0f624dbe179a8ddc523cc07184",
"angenor.github.io/.git/objects/50/cdeae24d9909481c1bb9cc271f52b58456d1db": "0305c00700fe2a471252659dc19e9013",
"angenor.github.io/.git/objects/57/f55780fdea692a7307e79f1215a5a97e2c45dc": "1bf1ec1480fec92e010f364dd4d651c1",
"angenor.github.io/.git/objects/58/9d868099e7159bcb44c8ecc07624073e3aedc0": "371ae739b40b73fff9906f99e33862b2",
"angenor.github.io/.git/objects/59/5fc6ab7276d4809623897ac6f4da0f595a73d5": "b6e997e717c7addd3c84eb3ddbf5a41f",
"angenor.github.io/.git/objects/5c/7e60fe1de95e9d06066c94f5beb06645ca1385": "e855bd74ef8975c6344905ddbfa14326",
"angenor.github.io/.git/objects/5e/84b1bd4427a8be19c836aa562c4fb1c2736c28": "24b062ffe5045f245080fc32a8e87533",
"angenor.github.io/.git/objects/69/905d812c76201cfb604e1e44f95b3d5b017602": "655e35db2ddf4c7aa694ced76662dee4",
"angenor.github.io/.git/objects/6a/39b96020b3c9d2fa5f3b11ee9425b264d7b218": "d7be38eac04a9c1a8b7c30ed1bdd06b2",
"angenor.github.io/.git/objects/6f/b354472824122b19bd02c98629f5427c8e9dc0": "102bfd33843420e9f7ea50e5d2b3217a",
"angenor.github.io/.git/objects/71/2d4f72eb940509f73ec1cf9e7c6e6b6ba51148": "5d07e55549aef7a45c50cd5dbe058b21",
"angenor.github.io/.git/objects/71/d3407e620318027b7a7a73291bb76585b511ed": "9828a3fe33c2ac1023b5f37408254085",
"angenor.github.io/.git/objects/72/19ad091c15f985e802be2bfce5b1f232c09cd8": "b1032fa528e7a09e6a7b3199390f88e8",
"angenor.github.io/.git/objects/72/8ebd46b466ff5c326e3b6f682aa257823edc9b": "2e76f5d403863da6b7474d21bc51a915",
"angenor.github.io/.git/objects/72/ac86d89ce16da821789719e968cbffa3439fca": "07d43e6c15df11a598514683537cde1b",
"angenor.github.io/.git/objects/72/d3e8ec9cd941d07960fc1e8fcb8a96f1a3dd6a": "3e17dc9cfabe57d4e038f0b2f432a361",
"angenor.github.io/.git/objects/74/6dd88aaae7218d62adc265889c9e820310ed03": "5229b202487174d9db4b76fa8999c70d",
"angenor.github.io/.git/objects/75/51bf7056e8aa5caee8787c4182d41a8b23ccc3": "b380850f4b30ec8fb6ac451f52734501",
"angenor.github.io/.git/objects/76/d659f0d7d99d8d49920ae46b38f6a28d308a50": "238b57ca765948e79b622e9dbe1d8337",
"angenor.github.io/.git/objects/77/1c5b4b00a62606b8417571740548e4e2c1ea37": "749dcb545e9ddc5636f107deecd7961a",
"angenor.github.io/.git/objects/77/42552cfa277e5b8796358237d8e1f0fab63fe9": "1777e94732a303db99971df6a176fc61",
"angenor.github.io/.git/objects/78/d8a2c02eae66d82bc11fa7aafb1ae676b6455b": "9f8b0527edf4a872f3a31b28da64c4dc",
"angenor.github.io/.git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
"angenor.github.io/.git/objects/81/a2b38b922e44a83b24db16dcdcbf82cff07657": "d8aabff1a8dd2baece1fa7a753e20959",
"angenor.github.io/.git/objects/87/c1c182c960ac38490f789f77ca3c012f6b9db8": "67e86bb28c1e8a4226895e2adb941342",
"angenor.github.io/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"angenor.github.io/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"angenor.github.io/.git/objects/8c/99b065b50d5594d0a1807a211c94485f185094": "52d38e78dfcbcf8cee2e62a2fffcee97",
"angenor.github.io/.git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
"angenor.github.io/.git/objects/8e/9d522538c2048552dd42029b367f6e50b4f79e": "c233bcf6f5519f5d74b1e0ac1fa7973d",
"angenor.github.io/.git/objects/8e/a4fdfd1a4238d928513583b0b76b23286d2f2d": "386fa4b3ef61d318bc309377fbe223d4",
"angenor.github.io/.git/objects/8e/b0a0aa6d1b4c6d2511c93720fcd48dc42d4d37": "3e7369d710b52234fae8be84e4402932",
"angenor.github.io/.git/objects/8e/e34e37d4d6b280e2b8012128a095f7eb373219": "1cc30a2c3dd3340b313b935ffc9eb9c9",
"angenor.github.io/.git/objects/90/2cfd01205f314744cdff72aa90784e2a5c7543": "c726227c1e4d037f0fc635056a784e0c",
"angenor.github.io/.git/objects/90/52d0affa7b1f9dbf6222d791e808ec510945d7": "12b92458d8b6003eef1680184b2dd506",
"angenor.github.io/.git/objects/91/db646e3e390e3b8abe7a476e464dd11d955d7d": "e13b49a2da2deabc2bff04b1f26137ac",
"angenor.github.io/.git/objects/93/3cc3d1aaab53770e9833f391aa20dc54668590": "4afe2be01096515b32f07ec72319e5b0",
"angenor.github.io/.git/objects/93/7b33bd85c3c4e7f92ff054110c82537b8ef9a2": "a72ad9ead703d9793f28b02c155d2f6a",
"angenor.github.io/.git/objects/94/482b7b74c0205d550ee28fca09aeaa7a6b12e3": "e9cf301ed88d8053f0d2bb86a25d0910",
"angenor.github.io/.git/objects/94/726d28dc75f608a304e41bbb3ac5b4879b7e6f": "f434e08c9e86133f1b6a3ad5f8ec5df0",
"angenor.github.io/.git/objects/95/14a4fb7c9589808839a4263533588f115bbec1": "06609df6781fedd545c2d0bb82556160",
"angenor.github.io/.git/objects/95/94c5dd89a0de76984377c51f46a1857dfe8e0f": "541498f97d5770098098809f4efaf9e1",
"angenor.github.io/.git/objects/96/6bd2f57c3c4b9459afa695c1ab756a9a029be2": "4402fde255875fe7194d3aae48bc11b0",
"angenor.github.io/.git/objects/97/45d0342af5cbe955286dbd036da50dd9b99aa4": "b7312baab76c32a4af11e5346c0cab39",
"angenor.github.io/.git/objects/97/840f9d06d4f5d5dcd2a46cd527d8a0d63e22f3": "23a6e572ee62c80458857c30ab27332f",
"angenor.github.io/.git/objects/99/28e16b3b96836a29da31df8f1c25af59caca5a": "5131bbaceb901cca7ccdcee55c22d500",
"angenor.github.io/.git/objects/9b/379aae256953b45e407cc0097441dc95471bb9": "bcdf7ac15eeb53b509e5441597a8b78b",
"angenor.github.io/.git/objects/9e/5581eafead18261302b99c8ab1c84e3c59446b": "e8e20294e0dfac5f4dbd24d985edd17d",
"angenor.github.io/.git/objects/9e/d3020d88041d13715f5b310668f05403f6e1ee": "61389cf6445924e91667c58b9214aad8",
"angenor.github.io/.git/objects/9f/2635bbaddcdf3f6bf210098e2e9d841848d91b": "4ed7bcd7eb938d836b0ff8436bc0b156",
"angenor.github.io/.git/objects/9f/352e53dc1c2205e7343bb3afef323edbdb22dc": "ebe318df6564772443175382019f0efd",
"angenor.github.io/.git/objects/a0/7a2cac7821d7902c12454e29145f521faf9f8d": "e9170413293ee68815b9cc33c258c9a4",
"angenor.github.io/.git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
"angenor.github.io/.git/objects/a3/e8958988e4abb63bf1a203e236a5f7a3c3f1ad": "e6084581592947f57ecf462156ef6439",
"angenor.github.io/.git/objects/a6/4e3f57baa3219730c2ea6721f637429de6ff9a": "621e92dd8166a23e47a0da0d2d8297bb",
"angenor.github.io/.git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
"angenor.github.io/.git/objects/a8/548392e46ce10bd1627947201262231afa24c4": "8499ef6d2897025d4357819b2f1359e0",
"angenor.github.io/.git/objects/ab/1539f32b9a5f2ec4023b5449462fa1afca30f8": "471fa096f9a755d1bd2a5c88c680f0f6",
"angenor.github.io/.git/objects/ab/21200047d6d425d5dbbb4bec3f0f753e87953f": "05120f1bc73c46a9c2e2b7eaf15388bd",
"angenor.github.io/.git/objects/b1/4378a1d753223362f0020eac4192231b743308": "8a200a3e63f1419ee93ac90a7ad07efb",
"angenor.github.io/.git/objects/b1/796840a204d93b282819a7c74f111868705ef3": "6a8ba6d09098090e566721d89e0990a6",
"angenor.github.io/.git/objects/b3/b5b2220a609b23acf42fcbba221cafea22f043": "b45aa0414598ce59df90aeb8ecef60c9",
"angenor.github.io/.git/objects/b4/0a86ca4f21edbfe8fe40b1fd67e060c6a9d76d": "894846aa351900c22009e89e647f9f6e",
"angenor.github.io/.git/objects/b5/731da12f2b55ec849c4af1dc92b1f31ad387c7": "5ce6a689374d8640611333a75f2290d5",
"angenor.github.io/.git/objects/b5/f0f235834dceae68bed422e719355a313c8d8c": "575a58f1a5ccd33f4a782f62396e089b",
"angenor.github.io/.git/objects/b6/83b7673ef71157c5882481b49a84b72d5bf966": "04102af765758521eaab4bd2e30a4e58",
"angenor.github.io/.git/objects/b6/df031ce7304fa959fdbc32b8ae50a8d84f6b48": "7a165d4ccbd82a3acfff1e2da36b572d",
"angenor.github.io/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"angenor.github.io/.git/objects/ba/8474a40c795cb3cca491581c7d1227ad7d2cd2": "b4d20b01ef35e8a80bb413caf8ee4404",
"angenor.github.io/.git/objects/ba/b7075533d989d14030597db04631b100a4ac77": "f76c95676d08b14564382feba8ff3a6a",
"angenor.github.io/.git/objects/ba/d5063438db5685c9af79daa34e15f7c1d47c90": "30c64255759d57f3001ffe142a0df9fd",
"angenor.github.io/.git/objects/bd/4a8c219f4763897ebc3019bf436998e077780e": "668b84c17a9417937aa79d1a43880962",
"angenor.github.io/.git/objects/bd/52ba652ea363f0aa75e3db8bee534d1a545ee0": "0899285d8a0ff782e5048293f25a4611",
"angenor.github.io/.git/objects/be/3b71d95ae7e09acc34e48a4d44315414718524": "131980569e30958b04fb2171abdcd208",
"angenor.github.io/.git/objects/be/500f7020cd21624b12520fe762a204aa4a6532": "f9da7f6eec111581c258c64de886c146",
"angenor.github.io/.git/objects/be/9e34bbd3395439ad2a20cb81630727f8a40e40": "c545007614398d82fef33f179f5d3328",
"angenor.github.io/.git/objects/bf/6aae1dd010ac324d2ab1c8cde223c29fdb8b4f": "018579b8478ade75d816a23b89676107",
"angenor.github.io/.git/objects/c1/f3162e1e720f8a3c8c8aee66c73a1ed12569ae": "fec3ed4698df520e4c770bc3af4655d1",
"angenor.github.io/.git/objects/c2/3290394ecdce712b48f0a5bb32b1429f8c41e0": "c6d54f86c1a5e0473b3d955cfcb4a6c4",
"angenor.github.io/.git/objects/c2/beefa2c9af18c8311e987613347337cdd7741c": "7f54720f2514d0025d1cdfdefda56cce",
"angenor.github.io/.git/objects/c5/9f3195daa27bb1547f7519bfd7f94f98f8b2de": "9fa991dd6a6c9e4c600f19cb8b1d79c8",
"angenor.github.io/.git/objects/c8/7c4dda756c2184308fe229914ca2bf21a29e28": "8f42d695f5fadd4ec5447a0135cd6630",
"angenor.github.io/.git/objects/cc/2b59f9cbd65055cc20a7289919e2f29a446195": "8cbbe21feb0bd711c7451354276a039f",
"angenor.github.io/.git/objects/cd/aa7c874748d388e1995142f026e45664f09d6f": "1f6c855a9cafddfac3fd177d73bcd519",
"angenor.github.io/.git/objects/ce/9d8403486a6802d98bdf533f79d1f51bad56ba": "131174d011788a70ed085233a2e7887e",
"angenor.github.io/.git/objects/cf/1c1abe04547ec9b556ed44a012b7f34c875215": "1065578c3e56d17c1ca55fef841bc49d",
"angenor.github.io/.git/objects/d0/b96da79526818cf177e0d99350d6d3ccd17ebc": "36d8902147e72e1be70e9104484359d9",
"angenor.github.io/.git/objects/d8/9d7a42e4f74b01b7eb6b8aaae1f03f3b6138f8": "95d8f24b96c5ce2e2f08fb55bd27e319",
"angenor.github.io/.git/objects/d8/f6839ff6ff68a232837602a27769bb5d27ec62": "c212b890ab9fee5bad1e09a17c44f43a",
"angenor.github.io/.git/objects/d9/3b1efcdea0165463980a285f55f85ccb304148": "14a95d141c0409937feb07f419ca2c49",
"angenor.github.io/.git/objects/da/0b74f9557107e710314cf31805454e73bbb8e7": "422986fabce7071b76afa06adc7cc1ee",
"angenor.github.io/.git/objects/dc/bee078c0bb8892e0f80884f496425135394528": "2acda4ad8de135ee755afe853e988434",
"angenor.github.io/.git/objects/dc/d7223c8286f05b633bbec49504b240c899bb9b": "addfe396d45bd5e26d59563667745cda",
"angenor.github.io/.git/objects/dc/fbcc5ce6ef170252807203def5a907657c912b": "c730433bca9ed8aa7c9f0a84a665f700",
"angenor.github.io/.git/objects/e1/dde9ea703eabc87ffd8126ac0426dda4333920": "9e1106562675345d60327167def27566",
"angenor.github.io/.git/objects/e2/5e16ef2b65586c894ba826862903714c5db762": "a90d1b9d6952a3102613a7d8df14fb52",
"angenor.github.io/.git/objects/e5/7136eb9389a1144aff79d1f44483f8ff937b51": "fe8c1ff5fda12cd7bf88f3eae50a7abf",
"angenor.github.io/.git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
"angenor.github.io/.git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
"angenor.github.io/.git/objects/e8/7856cb183047d9f57777d4b3730b63f449bbc2": "d398d5fb8b4b4a3c80c6d2f74054d1ce",
"angenor.github.io/.git/objects/e8/8ecc71505df4fa52ade8e6909177c2a2eaebb7": "bf56236db7bc0b929ed7c447e9623d79",
"angenor.github.io/.git/objects/e9/7776ff8daf9315663c041472bf4a5035501626": "d5aac3c50cee3ea058283c15e63e3dda",
"angenor.github.io/.git/objects/e9/9db98dd386bfd42aa445d826406d4e86a8bd59": "dca022274f7963b930ae0a4ee34b1a63",
"angenor.github.io/.git/objects/e9/afe1268683ed9a6029aadeda53be8f22650492": "b3907817e88186a1a82ca666ffd2dee6",
"angenor.github.io/.git/objects/ec/041952f15ff84793cfab6835045af0326ddc47": "dee1050627c409a944283cd3a9c63dcf",
"angenor.github.io/.git/objects/ec/bd02dfc3638e98a4828642cf5b7c03b03cd280": "c8cc069a4a20b2084cafd1e500e93c6b",
"angenor.github.io/.git/objects/ec/e4d08ca638d81976b84d89f2bce226b2324412": "262b8b82796f88ca247ca00d5c666f56",
"angenor.github.io/.git/objects/ee/44ccc151b1bf9259e4b149730097af1847af44": "2db6add8f370fb74c909b004b53f2ad5",
"angenor.github.io/.git/objects/f0/252b3fd77a7e750bca4eb7a4344ff86cf4260c": "48a36e3486d52f3ac8537891a4700cfe",
"angenor.github.io/.git/objects/f0/b4c9a911b8b5c55cbd1395c54ed33777cc0987": "48b1223011e9cea4a1f5eba13a6f36d9",
"angenor.github.io/.git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
"angenor.github.io/.git/objects/f4/d0fb5f4008c2902884aaff0ae87b9d1289acd6": "194190b483f5b44ff735cd64e95f9b86",
"angenor.github.io/.git/objects/f5/31a0d7ad95ef59ef8f1435b6ae93befb241051": "73519cf2c26d78c5d24e5dfe65f8171a",
"angenor.github.io/.git/objects/f6/793d09c80806ce3d52f130cde4d2e83b7f26b8": "04cba751263d927433161c336231765f",
"angenor.github.io/.git/objects/pack/pack-83220d764ddbde2fd9138e213b95a8994bc9baf2.idx": "33a0c82420a6e1d409853b1f5841c58a",
"angenor.github.io/.git/objects/pack/pack-83220d764ddbde2fd9138e213b95a8994bc9baf2.pack": "83ce9376c9db4a4dbcdd9d4b7398a650",
"angenor.github.io/.git/packed-refs": "fb10943e8345c454a42ee7d3124d87a1",
"angenor.github.io/.git/refs/heads/main": "b31c4727cf57286834b158f923a7502c",
"angenor.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"angenor.github.io/.git/refs/remotes/origin/main": "b31c4727cf57286834b158f923a7502c",
"angenor.github.io/assets/AssetManifest.json": "801125fca546f506babac9af4ec061ba",
"angenor.github.io/assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"angenor.github.io/assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"angenor.github.io/assets/gifs/scroll_down.gif": "6a77ebdd04c07276dbaef4ec4557171a",
"angenor.github.io/assets/logos/1200px-Laravel.svg.png": "b0ba6d0d7144a425934b9f2daab2b971",
"angenor.github.io/assets/logos/alloDocPC_logo.png": "9b55e94cfe37911a0be952cfe39e11ee",
"angenor.github.io/assets/logos/ansut_logo.png": "eb24789ad593606745ae3a494cf98004",
"angenor.github.io/assets/logos/arduino_logo.png": "09837ffb19b74127b05d4b881253e9cf",
"angenor.github.io/assets/logos/css_logo.png": "3b81431db5af49b11fca5c3cdc9ca7f1",
"angenor.github.io/assets/logos/dart_logo.png": "c979b430b2da155059ebc0a22b0a26ac",
"angenor.github.io/assets/logos/esatic_logo.png": "b895ecb3c5640b2d3058c1f947f337ca",
"angenor.github.io/assets/logos/firebase_logo.png": "d12cf916a663b52d01d2e0bbb2e7c18a",
"angenor.github.io/assets/logos/flutter_logo.png": "8ba1d5b022cd7f5999bea3085e87ceb0",
"angenor.github.io/assets/logos/html_logo.png": "cae1b4f6b223fe5a7bb712b680cffa67",
"angenor.github.io/assets/logos/laravel_logo.png": "8bfc5015da73628edae2996b01ed50c0",
"angenor.github.io/assets/logos/lca_logo.png": "425f6587daabb381bc524027936de38f",
"angenor.github.io/assets/logos/python_logo.png": "ff06c339780f23112c1cbbbb284158ff",
"angenor.github.io/assets/logos/rasberry_logo.png": "04a1111c17d069e04d89ac3b4a48d0b6",
"angenor.github.io/assets/logos/scroll_down.gif": "6a77ebdd04c07276dbaef4ec4557171a",
"angenor.github.io/assets/logos/siin_logo.png": "b36a7a7f4ab0374a414ce4f25d513e48",
"angenor.github.io/assets/logos/Sklearn_logo.png": "a79403d3ee8e6c7394d9ede470b784c9",
"angenor.github.io/assets/logos/tailwindcss_logo.png": "4b77a10e06713c656f546024dd66327d",
"angenor.github.io/assets/logos/wordpress_logo.png": "ba399827eefef8150b83a11efe65e17d",
"angenor.github.io/assets/NOTICES": "1dc3db5f34f1794254021883bab04c02",
"angenor.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"angenor.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"angenor.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"angenor.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"angenor.github.io/assets/photos/font_decran1.jpg": "06bf95580b806083d84f4dba4a903063",
"angenor.github.io/assets/photos/ma_photo_mini2.png": "08e6ba8d0209bf24e58d823568a37395",
"angenor.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"angenor.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"angenor.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"angenor.github.io/index.html": "c264234a91e74addf76e6081d2b5bb59",
"/": "9ecb90b52709a609de97fb3b9e73dacf",
"angenor.github.io/main.dart.js": "9bdb113375961a1add0dbee0d2d0a45f",
"angenor.github.io/manifest%20-%20Copie.json": "524d375075fc1a82c917a66f145fa157",
"angenor.github.io/manifest.json": "2c48018de10c4fdc0596bf8c9d00a04d",
"angenor.github.io/README.md": "d78687f5ec1387f6fe7714f1a178e2ed",
"angenor.github.io/version.json": "932e0038188b083116f2f3c9647e9fe3",
"assets/AssetManifest.json": "801125fca546f506babac9af4ec061ba",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "1dc3db5f34f1794254021883bab04c02",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "9ecb90b52709a609de97fb3b9e73dacf",
"main.dart.js": "56039023a54774b5bdc254a2c7da42e7",
"manifest.json": "2c48018de10c4fdc0596bf8c9d00a04d",
"version.json": "932e0038188b083116f2f3c9647e9fe3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
