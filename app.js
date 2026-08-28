const players = [
  {rank:1,name:"AsterNova",region:"KR",lp:2028,gain:132,games:18,avg:3.05,top4:76.9,win:35.7},
  {rank:2,name:"Cloud Spiral",region:"BR",lp:1928,gain:59,games:16,avg:3.31,top4:68.8,win:25.0},
  {rank:3,name:"燈火",region:"TW",lp:1886,gain:117,games:19,avg:3.18,top4:73.7,win:36.8},
  {rank:4,name:"YamatoTFT",region:"JP",lp:1885,gain:50,games:17,avg:3.42,top4:70.6,win:23.5},
  {rank:5,name:"Northwind",region:"NA",lp:1871,gain:27,games:14,avg:3.57,top4:64.3,win:21.4},
  {rank:6,name:"Petit Roi",region:"EUW",lp:1868,gain:20,games:15,avg:3.60,top4:66.7,win:20.0},
  {rank:7,name:"Seoul Train",region:"KR",lp:1821,gain:-14,games:20,avg:3.85,top4:60.0,win:15.0},
  {rank:8,name:"ねこロール",region:"JP",lp:1773,gain:75,games:12,avg:3.25,top4:75.0,win:25.0},
  {rank:9,name:"Solaris",region:"NA",lp:1760,gain:43,games:18,avg:3.72,top4:61.1,win:22.2},
  {rank:10,name:"Blue Hour",region:"EUW",lp:1744,gain:-26,games:13,avg:4.08,top4:53.8,win:15.4}
];

const units = [
  {name:"アカリ",cost:1,traits:["Inferno","Adaptor","Ravager"],items:["デスブレード","ヘクステック ガンブレード","ストライカー フレイル"],alts:["ハンド オブ ジャスティス","インフィニティ エッジ"]},
  {name:"カルマ",cost:1,traits:["Blossom","Spellweaver"],items:["ショウジンの矛","ジュエル ガントレット","ナッシャー トゥース"],alts:["ラバドン デスキャップ","アークエンジェル スタッフ"]},
  {name:"カミール",cost:1,traits:["Coven","Ravager"],items:["ブラッドサースター","タイタンの誓い","ステラックの篭手"],alts:["ハンド オブ ジャスティス","クラウンガード"]},
  {name:"オーン",cost:1,traits:["Elderwood","Defender"],items:["ガーゴイル ストーンプレート","スピリット ビサージュ","ワーモグ アーマー"],alts:["ドラゴン クロウ","ブランブル ベスト"]},
  {name:"ザヤ",cost:1,traits:["Elderwood","Fae","Rapidfire"],items:["グインソー レイジブレード","ラスト ウィスパー","ジャイアント スレイヤー"],alts:["デスブレード","レッド バフ"]},
  {name:"ヴァルス",cost:1,traits:["Inferno","Rapidfire"],items:["インフィニティ エッジ","ラスト ウィスパー","デスブレード"],alts:["ショウジンの矛","ジャイアント スレイヤー"]},
  {name:"ベイガー",cost:1,traits:["Eldritch","Sprykin","Spellweaver"],items:["ジュエル ガントレット","ナッシャー トゥース","ショウジンの矛"],alts:["ラバドン デスキャップ","モレロノミコン"]},
  {name:"モルガナ",cost:4,traits:["Coven","Invoker"],items:["スピリット ビサージュ","ドラゴン クロウ","ステッドファスト ハート"],alts:["クラウンガード","アイオニック スパーク"]},
  {name:"ケイトリン",cost:2,traits:["Coven","Hunter"],items:["インフィニティ エッジ","ラスト ウィスパー","ショウジンの矛"],alts:["デスブレード","レッド バフ"]}
];

const livePowerUnits = [
  {name:"センチネル",play:2.54,avg:4.38,items:["ガーゴイル ストーンプレート","ワーモグ アーマー","サンファイア ケープ"]},
  {name:"タリック",play:2.20,avg:3.87,items:["ガーゴイル ストーンプレート","スピリット ビサージュ","ワーモグ アーマー"]},
  {name:"ヘカリム",play:2.05,avg:4.52,items:["ガーゴイル ストーンプレート","ワーモグ アーマー","サンファイア ケープ"]},
  {name:"ダイアナ",play:2.01,avg:4.49,items:["プロテクターの誓い","クラウンガード","ハンド オブ ジャスティス"]},
  {name:"ナー",play:1.99,avg:3.74,items:["ブラッドサースター","タイタンの誓い","ステラックの篭手"]},
  {name:"ヴァイ",play:1.93,avg:4.44,items:["ガーゴイル ストーンプレート","ワーモグ アーマー","サンファイア ケープ"]},
  {name:"セット",play:1.85,avg:4.30,items:["ワーモグ アーマー","アイオニック スパーク","ガーゴイル ストーンプレート"]},
  {name:"アムム",play:1.84,avg:4.31,items:["ガーゴイル ストーンプレート","プロテクターの誓い","ワーモグ アーマー"]}
];

const liveLeaders = [
  {name:"Kojnid",region:"EUW",rate:"Division II · 33 LP",games:39,top4:87.2,win:41.0},
  {name:"MF deep b1ue",region:"VN",rate:"Division II · 28 LP",games:52,top4:71.2,win:42.3},
  {name:"HND",region:"VN",rate:"Division II · 7 LP",games:56,top4:78.6,win:26.8},
  {name:"Fer",region:"SEA",rate:"Division II · 0 LP",games:37,top4:91.9,win:43.2},
  {name:"ego illusions",region:"BR",rate:"Division III · 71 LP",games:44,top4:88.6,win:36.4},
  {name:"혁 듕",region:"KR",rate:"Division III · 67 LP",games:51,top4:78.4,win:35.3},
  {name:"ErenYeager",region:"VN",rate:"Division III · 60 LP",games:40,top4:85.0,win:35.0},
  {name:"오박사",region:"KR",rate:"Division III · 48 LP",games:46,top4:69.6,win:39.1},
  {name:"강선종",region:"KR",rate:"Division III · 38 LP",games:42,top4:78.6,win:45.2},
  {name:"Asta1 nè",region:"VN",rate:"Division III · 37 LP",games:46,top4:73.9,win:32.6}
];
const liveItems = [
  {name:"ガーゴイル ストーンプレート",play:5.19,avg:4.40,top4:51.9,win:13.1},
  {name:"ワーモグ アーマー",play:3.91,avg:4.29,top4:54.1,win:13.8},
  {name:"グインソー レイジブレード",play:3.82,avg:4.48,top4:50.1,win:13.3},
  {name:"ショウジンの矛",play:3.53,avg:4.28,top4:54.0,win:14.1},
  {name:"ジュエル ガントレット",play:3.51,avg:4.35,top4:52.8,win:13.2},
  {name:"スピリット ビサージュ",play:3.01,avg:4.29,top4:54.0,win:14.0},
  {name:"プロテクターの誓い",play:2.66,avg:4.21,top4:55.4,win:14.2},
  {name:"ジャイアント スレイヤー",play:2.55,avg:4.21,top4:55.6,win:14.4},
  {name:"インフィニティ エッジ",play:2.49,avg:4.28,top4:53.7,win:14.7},
  {name:"盗賊のグローブ",play:2.40,avg:4.05,top4:58.3,win:16.1}
];

const eliteUnitUsage = [
  ["センチネル",29,2.54],["ケネン",28,1.54],["アーリ",20,1.46],["セット",18,1.81],
  ["マルファイト",15,1.10],["ザイラ",14,1.58],["アフェリオス",13,1.55],["ラックス",12,1.18],
  ["ソラカ",11,1.05],["モルガナ",11,0.92],["マオカイ",9,1.41],["ブランブルバック",6,0.74],
  ["エズリアル",6,0.96],["アッシュ",6,1.12],["アルーン",6,0.82],["シヴィア",6,0.88],
  ["ドレイヴン",6,0.79],["アムム",5,1.83],["エルダードラゴン",5,0.46],["ナー",4,1.99]
].map(([name,count,overall])=>({name,count,elite:count/50*100,overall:overall/8*100,delta:count/50*100-overall/8*100}));

const emblems = [
  ["処刑人","Executioner",0.40,4.12,57.0,16.9,["ドレイヴン","ザイラ","アーリ","ラックス"],"ドレイヴン主力の処刑人軸","DA_18_EmblemExecutioner.png"],
  ["ブローラー","Brawler",0.33,3.96,60.3,15.9,["マスター・イー","ワーウィック"],"マスター・イー／ワーウィック主力のブローラー軸","DA_18_EmblemBrawler.png"],
  ["ブロッサム","Blossom",0.33,4.34,52.4,15.4,["ナー","ザイラ","シヴィア"],"ブロッサム縦伸ばし＋ナーまたはザイラ","DA_18_EmblemBlossom.png"],
  ["インヴォーカー","Invoker",0.30,4.09,58.0,15.9,["アルーン","グロンプ","ニダリー","ラックス"],"アルーン主力のインヴォーカー軸","DA_18_EmblemInvoker.png"],
  ["ヴァンガード","Vanguard",0.28,4.04,58.6,14.9,["ブランブルバック"],"ブランブルバック前衛＋ヴァンガード縦伸ばし","DA_18_EmblemVanguard.png"],
  ["ルナー","Lunar",0.25,4.27,54.9,13.3,[],"ルナーの発動段階を上げる構成","DA_18_EmblemLunar.png"],
  ["フェイ","Fae",0.24,4.12,56.0,20.6,["シヴィア","レンガー"],"シヴィア／レンガー主力のフェイ軸","DA_18_EmblemFae.png"],
  ["スペルウィーバー","Spellweaver",0.24,4.18,55.4,15.4,["モルガナ","ラックス","ソラカ"],"モルガナまたはラックス主力のAP構成","DA_18_EmblemSpellweaver.png"],
  ["ラピッドファイア","Rapidfire",0.24,4.12,57.3,15.0,["ブランブルバック","レンガー"],"ラピッドファイア縦伸ばし＋物理主力","DA_18_EmblemRapidfire.png"],
  ["エルダーウッド","Elderwood",0.22,4.18,54.8,17.4,[],"エルダーウッド縦伸ばし構成","DA_18_EmblemElderwood.png"],
  ["ハンター","Hunter",0.22,4.23,54.8,15.9,["レンガー"],"レンガー主力のハンター軸","DA_18_EmblemHunter.png"],
  ["ディフェンダー","Defender",0.22,4.03,58.1,16.6,["レンガー"],"ディフェンダー前衛＋レンガー主力","DA_18_EmblemDefender.png"],
  ["フローラ・ファタリス","Flora Fatalis",0.21,3.84,62.3,18.7,["ベイガー","カシオペア"],"ベイガー／カシオペア主力のフローラ軸","DA_18_EmblemFloraFatalis.png"],
  ["ジャガーノート","Juggernaut",0.19,3.92,60.9,18.9,[],"ジャガーノート前衛を縦に伸ばす構成","DA_18_EmblemJuggernaut.png"],
  ["インフェルノ","Inferno",0.17,4.20,54.4,16.7,[],"インフェルノ縦伸ばし＋AP主力","DA_18_EmblemInferno.png"],
  ["ブラックソーン","Blackthorn",0.16,4.55,49.0,12.1,["マークウルフ","カ＝ジックス"],"マークウルフ／カ＝ジックス主力のブラックソーン軸","DA_18_EmblemBlackthorn.png"],
  ["プライマル","Primal",0.16,4.44,51.2,12.1,[],"プライマルの発動段階を上げる構成","DA_18_EmblemPrimal.png"],
  ["スプライキン","Sprykin",0.16,4.17,55.4,15.7,["レンガー","レク＝サイ"],"レンガー／レク＝サイ主力のスプライキン軸","DA_18_EmblemSprykin.png"],
  ["ラヴェジャー","Ravager",0.15,4.30,54.6,12.8,["レンガー"],"レンガー主力のラヴェジャー軸","DA_18_EmblemSlayer.png"],
  ["カヴン","Coven",0.08,5.10,39.2,10.2,[],"カヴン縦伸ばし（現状は低サンプル・低成績）","DA_18_EmblemCoven.png"]
].map(([name,en,play,avg,top4,win,holders,comp,file],i)=>({rank:i+1,name,en,play,avg,top4,win,holders,comp,file}));

const artifacts = [
  {name:"ウィッツ エンド",type:"S · PBE #1",icon:"✧",holders:["ケイル","マスター・イー","ザヤ","アジール"],avg:3.80,win:19.4,note:"PBE平均順位順。1位装備先ケイルは平均3.23。"},
  {name:"タイタン ハイドラ",type:"S · 装備先データあり",icon:"◆",holders:["ザヤ","マスター・イー","レンガー","ワーウィック"],avg:4.11,win:13.9,note:"ザヤ平均3.49、マスター・イー平均3.47。"},
  {name:"フリッカーブレード",type:"S · PBE #2",icon:"≋",holders:["ケイル","ザヤ","トリスターナ","マスター・イー"],avg:3.90,win:17.8,note:"ケイル平均3.23、ザヤ平均3.66。"},
  {name:"ライトシールドのクレスト",type:"S · PBE #5",icon:"◈",holders:["オーン","レオナ","セジュアニ","マルファイト"],avg:4.01,win:16.4,note:"オーン平均3.71、レオナ平均3.54。"},
  {name:"不滅の協定",type:"S · PBE #3",icon:"∞",holders:["ベイガー","カシオペア","ルブラン","小石"],avg:4.00,win:16.2,note:"ベイガー平均3.57。タンク向けという仮説を実測で修正。"},
  {name:"ゴールド コレクター",type:"S · PBE #7",icon:"●",holders:["ユナラ","ドレイヴン","トリスターナ","ザヤ"],avg:4.04,win:17.9,note:"ユナラ平均3.33、勝率27.8%。"},
  {name:"フィッシュボーン",type:"A · PBE #22",icon:"➹",holders:["ザヤ","マスター・イー","ドレイヴン","ユナラ"],avg:4.28,win:14.2,note:"ドレイヴン平均3.47、勝率29.1%。"},
  {name:"ラピッド ファイアキャノン",type:"S · PBE #4",icon:"⌖",holders:["ワーウィック","マスター・イー","ザヤ","ケイル"],avg:4.01,win:16.7,note:"ワーウィック平均3.78、マスター・イー平均3.60。"},
  {name:"不屈",type:"S · PBE #15",icon:"⬡",holders:["オーン","セジュアニ","アリスター","マオカイ"],avg:4.20,win:14.7,note:"セジュアニ平均3.52、勝率24.2%。"}
];

const artifactHolderAverages = {
  "ウィッツ エンド":{"ケイル":3.23},
  "タイタン ハイドラ":{"ザヤ":3.49,"マスター・イー":3.47},
  "フリッカーブレード":{"ケイル":3.23,"ザヤ":3.66},
  "ライトシールドのクレスト":{"オーン":3.71,"レオナ":3.54},
  "不滅の協定":{"ベイガー":3.57},
  "ゴールド コレクター":{"ユナラ":3.33},
  "フィッシュボーン":{"ドレイヴン":3.47},
  "ラピッド ファイアキャノン":{"ワーウィック":3.78,"マスター・イー":3.60},
  "不屈":{"セジュアニ":3.52}
};

function holderAverage(artifact,champion){
  return artifactHolderAverages[artifact]?.[champion];
}

const artifactCatalog = [
  ["ウィッツ エンド","S",3.80,-0.70,19.4,1.0,"da_artifact_witsend.png"],["フリッカーブレード","S",3.90,-0.60,17.8,2.3,"da_artifact_navoriflickerblade.png"],["不滅の協定","S",4.00,-0.50,16.2,0.7,"da_artifact_eternalpact.png"],["ラピッド ファイアキャノン","S",4.01,-0.49,16.7,1.3,"da_artifact_rapidfirecannon.png"],["ライトシールドのクレスト","S",4.01,-0.49,16.4,1.4,"da_artifact_lightshieldcrest.png"],["獄炎のハチェット","S",4.01,-0.49,15.0,0.8,"da_artifact_hellfirehatchet.png"],["ゴールド コレクター","S",4.04,-0.46,17.9,0.9,"da_artifact_goldcollector.png"],["枯死の宝石","S",4.10,-0.40,16.5,1.0,"da_artifact_blightingjewel.png"],["ドーンコア","S",4.11,-0.39,15.0,1.6,"da_artifact_dawncore.png"],["タイタン ハイドラ","S",4.11,-0.39,13.9,0.8,"da_artifact_titanichydra.png"],["ミトン","S",4.11,-0.39,15.4,1.0,"da_artifact_mittens.png"],["インフィニティ フォース","S",4.19,-0.31,13.9,1.2,"da_artifact_infinityforce.png"],["リッチ ベイン","S",4.19,-0.31,13.3,0.8,"da_artifact_lichbane.png"],["ヴォイド ガントレット","S",4.19,-0.31,13.9,0.8,"da_artifact_voidgauntlet.png"],["不屈","S",4.20,-0.30,14.7,1.6,"da_artifact_theindomitable.png"],["ゾーニャの遡時計","A",4.20,-0.30,15.6,0.6,"da_artifact_zhonyasparadox.png"],["ホライゾン フォーカス","A",4.23,-0.27,13.8,0.4,"da_artifact_horizonfocus.png"],["スタティック シヴ","A",4.25,-0.25,13.6,1.0,"da_artifact_statikkshiv.png"],["夜明けの加護","A",4.26,-0.24,13.0,1.2,"da_artifact_aegisofdawn.png"],["ルーデン テンペスト","A",4.26,-0.24,13.1,0.9,"da_artifact_ludenstempest.png"],["超越のタリスマン","A",4.28,-0.22,13.1,0.6,"da_item_artifact_talismanofascension.png"],["フィッシュボーン","A",4.28,-0.22,14.2,1.1,"da_artifact_fishbones.png"],["モーグル メイル","A",4.28,-0.22,14.6,2.0,"da_artifact_mogulsmail.png"],["ギャンブラーの剣","B",4.30,-0.20,15.1,0.9,"da_artifact_gamblersblade.png"],["夕闇の加護","B",4.35,-0.15,12.7,1.0,"da_artifact_aegisofdusk.png"],["シーカー アームガード","B",4.35,-0.15,14.6,1.0,"da_artifact_seekersarmguard.png"],["マナザネ","B",4.35,-0.15,12.7,1.4,"da_artifact_manazane.png"],["フォビドゥン アイドル","B",4.36,-0.14,13.2,0.8,"da_artifact_forbiddenidol.png"],["ハルクラッシャー","B",4.37,-0.13,12.6,0.8,"da_artifact_hullcrusher.png"],["シルバーミアの夜明け","D",4.61,0.11,10.9,0.4,"da_artifact_silvermeredawn.png"],["デス ディファイアンス","D",4.77,0.27,8.2,0.7,"da_artifact_deathsdefiance.png"]
].map(([name,tier,avg,delta,win,freq,file],i)=>({rank:i+1,name,tier,avg,delta,win,freq,file}));

const neutralPlacement = 4.5;
const artifactAverage = artifacts.reduce((sum,item)=>sum+item.avg,0)/artifacts.length;
const metaCdn = "https://cdn.metatft.com/file/metatft";
const championSlugs = {
  "アカリ":"akali","カルマ":"karma","カミール":"camille","オーン":"ornn","ザヤ":"xayah","ヴァルス":"varus","ベイガー":"veigar","モルガナ":"morgana","ケイトリン":"caitlyn",
  "ケイル":"kayle","マスター・イー":"masteryi","アジール":"azir","レンガー":"rengar","ワーウィック":"warwick","トリスターナ":"tristana","レオナ":"leona","セジュアニ":"sejuani","マルファイト":"malphite","カシオペア":"cassiopeia","ルブラン":"leblanc","小石":"pebbles","ユナラ":"yunara","ドレイヴン":"draven","アリスター":"alistar","マオカイ":"maokai","セット":"sett","ザイラ":"zyra","アフェリオス":"aphelios","アーリ":"ahri","シヴィア":"sivir","ヘカリム":"hecarim","アムム":"amumu","センチネル":"sentinel","ケネン":"kennen","ラックス":"lux","ソラカ":"soraka","ブランブルバック":"brambleback","エズリアル":"ezreal","アッシュ":"ashe","アルーン":"alune","エルダードラゴン":"elderdragon","ナー":"gnar","ニダリー":"nidalee","マークウルフ":"murkwolf","カ＝ジックス":"khazix","レク＝サイ":"reksai","グロンプ":"gromp"
};
const itemSlugs = {
  "デスブレード":"deathblade","ヘクステック ガンブレード":"hextechgunblade","ストライカー フレイル":"strikersflail","ハンド オブ ジャスティス":"handofjustice","インフィニティ エッジ":"infinityedge","ショウジンの矛":"spearofshojin","ジュエル ガントレット":"jeweledgauntlet","ナッシャー トゥース":"nashorstooth","ラバドン デスキャップ":"rabadonsdeathcap","アークエンジェル スタッフ":"archangelsstaff","ブラッドサースター":"bloodthirster","タイタンの誓い":"titansresolve","ステラックの篭手":"steraksgage","クラウンガード":"crownguard","ガーゴイル ストーンプレート":"gargoylestoneplate","スピリット ビサージュ":"spiritvisage","ワーモグ アーマー":"warmogsarmor","ドラゴン クロウ":"dragonsclaw","ブランブル ベスト":"bramblevest","グインソー レイジブレード":"guinsoosrageblade","ラスト ウィスパー":"lastwhisper","ジャイアント スレイヤー":"giantslayer","レッド バフ":"redbuff","レッドバフ":"redbuff","モレロノミコン":"morellonomicon","ステッドファスト ハート":"steadfastheart","アイオニック スパーク":"ionicspark"
};
Object.assign(itemSlugs,{"クラーケン フューリー":"krakensfury","ブルー バフ":"bluebuff","サンファイア ケープ":"sunfirecape","プロテクターの誓い":"protectorsvow","盗賊のグローブ":"thievesgloves"});
const artifactSlugs = {
  "ウィッツ エンド":"witsend","タイタン ハイドラ":"titanichydra","フリッカーブレード":"navoriflickerblade","ライトシールドのクレスト":"lightshieldcrest","不滅の協定":"eternalpact","ゴールド コレクター":"goldcollector","フィッシュボーン":"fishbones","ラピッド ファイアキャノン":"rapidfirecannon","不屈":"theindomitable"
};

function fallbackImage(img){
  img.hidden=true;
  const fallback=img.nextElementSibling;
  if(fallback) fallback.hidden=false;
}

function championImage(name,className=""){
  const slug=championSlugs[name];
  return `<span class="image-shell ${className}"><img src="${metaCdn}/champions/tft18_${slug}.png" alt="${name}" loading="lazy" onerror="fallbackImage(this)"><span class="image-fallback" hidden>${name.slice(0,1)}</span></span>`;
}

function itemImage(name,className=""){
  const slug=itemSlugs[name];
  return `<span class="image-shell ${className}"><img src="${metaCdn}/items/da_${slug}.png" alt="${name}" loading="lazy" onerror="fallbackImage(this)"><span class="image-fallback" hidden>◆</span></span>`;
}

function artifactImage(name){
  const slug=artifactSlugs[name];
  return `<span class="image-shell artifact-image"><img src="${metaCdn}/items/da_artifact_${slug}.png" alt="${name}" loading="lazy" onerror="fallbackImage(this)"><span class="image-fallback" hidden>✦</span></span>`;
}

function artifactFileImage(item){
  return `<span class="image-shell catalog-image"><img src="${metaCdn}/items/${item.file}" alt="${item.name}" loading="lazy" onerror="fallbackImage(this)"><span class="image-fallback" hidden>✦</span></span>`;
}

function emblemImage(item,className=""){
  return `<span class="image-shell ${className}"><img src="https://ap.tft.tools/img/items_s14/${item.file}?w=52" alt="${item.name}の紋章" loading="lazy" onerror="fallbackImage(this)"><span class="image-fallback" hidden>紋</span></span>`;
}

function placementDelta(value, baseline=neutralPlacement){
  const delta = baseline-value;
  return {value:Math.abs(delta).toFixed(2),good:delta>=0,label:delta>=0?"改善":"悪化"};
}

function impactBadge(value, baseline=neutralPlacement, suffix="基準比"){
  const impact=placementDelta(value,baseline);
  return `<span class="impact-badge ${impact.good?"positive":"negative"}">${impact.good?"▲":"▼"} ${impact.value}位 ${impact.label}<small>${suffix}</small></span>`;
}

const traits = [
  {name:"エクリプス",symbol:"E",tier:"S",play:1.4,avg:3.28,win:23.2,levels:"0"},
  {name:"アバター",symbol:"A",tier:"S",play:10.8,avg:3.55,win:24.1,levels:"1"},
  {name:"エメラルドの神髄",symbol:"G",tier:"S",play:24.7,avg:3.67,win:20.7,levels:"1"},
  {name:"同調",symbol:"T",tier:"S",play:12.6,avg:3.69,win:19.3,levels:"1"},
  {name:"翠の父",symbol:"F",tier:"S",play:17.7,avg:3.71,win:22.2,levels:"1"},
  {name:"ブローラー",symbol:"B",tier:"S",play:30.8,avg:3.85,win:18.2,levels:"2 / 4 / 6"},
  {name:"原生林",symbol:"P",tier:"S",play:19.7,avg:3.87,win:19.7,levels:"1"},
  {name:"ブロッサム",symbol:"B",tier:"S",play:18.9,avg:3.97,win:17.3,levels:"3 / 5 / 7 / 9 / 11"},
  {name:"プライマル",symbol:"P",tier:"S",play:13.4,avg:3.99,win:14.6,levels:"2 / 4"},
  {name:"捕食者の頂点",symbol:"A",tier:"S",play:9.3,avg:4.00,win:17.6,levels:"1"},
  {name:"ルナー",symbol:"L",tier:"S",play:16.1,avg:4.00,win:15.2,levels:"2 / 3 / 4 / 5"},
  {name:"ハンター",symbol:"H",tier:"S",play:10.5,avg:4.01,win:16.2,levels:"2 / 3 / 4 / 5"}
];

const wasianGames = [
  {
    game:1,time:"4:11–4:40",result:"5位",line:"Solarリロール · ケイル / ヴァルス",
    points:[
      {at:"4:17:47",sec:15467,text:"レベル4では基本的に回さず、経済系のオーグメントを待つ判断。",spoken:true},
      {at:"4:19:07",sec:15547,text:"Solarリロールを選ぶが、経済とアイテムの両方が必要な状況は、それ以前の進行に問題があったサインだと自己評価。",spoken:true},
      {at:"4:23:26",sec:15806,text:"チャームを毎ターン買うのは大きな出費で、経済チャームも多くないため最優先ではない。",spoken:true},
      {at:"4:30:40",sec:16240,text:"ステッドファストかJGかは、次にタンク装備を得られるかで決める。AD寄りのロビーも確認している。",spoken:true},
      {at:"4:36:20",sec:16580,text:"ケイルのガンブレードは良くないと判断。Infernoがあるためレッドバフの優先度も低い。",spoken:true}
    ],
    analysis:"苦しいリロール構成でも、無条件に回すのではなく、経済・残り枚数・ロビーの物理火力比率を同時に見て5位まで回復した試合。"
  },
  {
    game:2,time:"4:42–5:22",result:"4位",line:"Rapidfireテンポ · トリスターナ / ザヤ",
    points:[
      {at:"4:53:14",sec:17594,text:"トリスターナを使ったテンポ進行を選択。",spoken:true},
      {at:"4:58:49",sec:17929,text:"盤面を保つため、ここは装備を2つ即座に完成させる必要があると判断。",spoken:true},
      {at:"5:03:17",sec:18197,text:"敗因は火力不足ではなく、前衛がまったく足りないことだと明言。レベル7で回す選択肢を検討。",spoken:true},
      {at:"5:17:07",sec:19027,text:"インフィニティ・エッジを移し、ザヤ用アイテムを取る方針へ変更。",spoken:true},
      {at:"5:22:37",sec:19357,text:"上位盤面に勝つにはドレイヴン2が必要で、レベル9でのピボットも候補だったと振り返る。",spoken:true}
    ],
    analysis:"キャリーの強化より前衛の不足を先に診断している点が重要。最終的には4位確保だが、9レベルでの高コスト移行が遅れたことを改善点としている。"
  },
  {
    game:3,time:"5:25–5:59",result:"2位",line:"テンポ進行 · ユナラ / エズリアル",
    points:[
      {at:"5:30:13",sec:19813,text:"レベル6で回してから盤面を再評価する案を検討。複製器があるため、2体の★3候補を追いやすいと判断。",spoken:true},
      {at:"5:43:47",sec:20627,text:"火力素材が2つ残っているため、アーク系よりステッドファストかイーブンシュラウドを優先。",spoken:true},
      {at:"5:49:36",sec:20976,text:"リロールに多くのゴールドが必要な局面では、原則としてチャームにお金を使いすぎない。",spoken:true},
      {at:"5:55:16",sec:21316,text:"3-2のロールダウン後はロビー優勝ではなく順位確保を目標に切り替えた。",spoken:true},
      {at:"5:59:10",sec:21550,text:"最後はリロールよりレベル上げを選んだテンポ判断だったと総括。",spoken:true}
    ],
    analysis:"勝ち切る盤面ではないと早めに認識し、1位狙いから2位確保へ目標を変更。セット18でも、チャーム購入とリロールの競合を管理することが重要だと分かる。"
  }
];

const state = { view:"overview", region:"ALL", period:"24h", query:"" };
const root = document.querySelector("#view-root");
const titles = {overview:"メタ概要",players:"チャレンジャー",units:"駒・理想装備",artifacts:"アーティファクト適性",emblems:"紋章の持たせ先",traits:"シナジー分析",vod:"Wasianiverson VOD分析"};
const unitPills = list => `<div class="unit-pills">${list.map(x=>`<span class="unit-pill" title="${x}">${x.slice(0,1)}</span>`).join("")}</div>`;
const fmtDelta = n => `<span class="${n>=0?"gain":"loss"}">${n>=0?"+":""}${n} LP</span>`;

function filteredPlayers(){
  return players.filter(p => (state.region === "ALL" || p.region === state.region) && p.name.toLowerCase().includes(state.query.toLowerCase()));
}

function stat(label,value,delta,down=false){
  return `<div class="stat"><div class="stat-label">${label}</div><div class="stat-value">${value}</div><div class="stat-delta ${down?"down":""}">${delta}</div></div>`;
}

function playerRows(list){
  if(!list.length) return `<tr><td colspan="6" class="empty">該当するプレイヤーはいません</td></tr>`;
  return list.map(p=>`<tr data-player="${p.name}"><td class="rank">#${p.rank}</td><td class="player-cell">${p.name}<span class="region">${p.region}</span></td><td class="lp">${p.lp.toLocaleString()}</td><td>${fmtDelta(p.gain)}</td><td>${p.avg.toFixed(2)}</td><td>${p.top4}%</td></tr>`).join("");
}

function leaderboard(list,full=false){
  return `<div class="table-wrap"><table><thead><tr><th>順位</th><th>プレイヤー</th><th>LP</th><th>${state.period} 増減</th><th>平均順位</th><th>Top 4</th></tr></thead><tbody>${playerRows(full?list:list.slice(0,7))}</tbody></table></div>`;
}

function sparkline(){
  return `<div class="sparkline" aria-label="グローバル上位50人の平均LP推移"><svg viewBox="0 0 420 90" preserveAspectRatio="none"><defs><linearGradient id="grad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#37e1c1" stop-opacity=".24"/><stop offset="1" stop-color="#37e1c1" stop-opacity="0"/></linearGradient></defs><line x1="0" y1="72" x2="420" y2="72"/><line x1="0" y1="42" x2="420" y2="42"/><path class="area" d="M0 75 C45 68,55 71,88 62 S138 49,170 54 S220 40,250 43 S300 25,330 31 S382 13,420 17 L420 90 L0 90Z"/><path d="M0 75 C45 68,55 71,88 62 S138 49,170 54 S220 40,250 43 S300 25,330 31 S382 13,420 17"/></svg></div>`;
}

function renderOverview(){
  return `<div class="view"><div class="preview-banner"><b>SET 18 LIVE START</b><span>神秘の森がPatch 18.1で開幕。外部統計サイトがLIVEへ切り替わるまで、PBE値とLIVE値を混ぜずに表示します。</span></div><div class="stats-grid">${stat("リリース","8月26日 PT","Patch 18.1")}${stat("新メカニクス","ウィスプ","1ラウンド1回購入")}${stat("保存済み統計","31種","アーティファクト全一覧")}${stat("LIVE統計","一部接続","tactics.tools 18.1")}</div><div class="dashboard-grid"><section class="panel"><div class="panel-head"><div><h2>開幕時の分析方針</h2><p>初日の数字を誤読しないための優先順位</p></div></div><div class="riser-list"><div class="riser"><div class="avatar">1</div><div><b>まず構成単位で確認</b><small>平均順位・Top4率・採用率をセットで見る</small></div></div><div class="riser"><div class="avatar">2</div><div><b>駒単体の数字は条件分離</b><small>コスト、★数、装備時、ステージを混同しない</small></div></div><div class="riser"><div class="avatar">3</div><div><b>アーティファクトは装備先込み</b><small>単体平均ではなく、駒別の順位差を重視</small></div></div><div class="riser"><div class="avatar">4</div><div><b>上位選手は20試合で追跡</b><small>LP差、使用駒、シナジーの変化を比較</small></div></div></div></section><section class="panel"><div class="panel-head"><div><h2>データ接続状況</h2><p>2026-08-27 11:45 JST確認</p></div></div><div class="riser-list"><div class="riser"><div class="avatar">✓</div><div><b>tactics.tools</b><small>Set 18 · Patch 18.1 LIVE構成・駒・ランキング</small></div><strong>LIVE</strong></div><div class="riser"><div class="avatar">!</div><div><b>MetaTFT 通常統計</b><small>構成は17.7、アーティファクトは17.9表示</small></div><strong>待機</strong></div><div class="riser"><div class="avatar">P</div><div><b>MetaTFT Set 18</b><small>PBE 17.8のためLIVE欄には混在させません</small></div><strong>分離</strong></div></div></section></div></div>`;
}

function renderProgression(){
  return `<section class="panel progression-panel"><div class="panel-head"><div><h2>18.1 LIVE 初動構成</h2><p>tactics.tools · 2026-08-28 09:23 JST取得 · Platinum+ · 過去2日</p></div><span class="sync-badge">LIVE</span></div><div class="progression-grid"><div><small>Lv7リロール · 採用率 0.30</small><b>ディフェンダー カシオペア＆フィドル</b><span>平均4.07 · Top4 59.0% · 1位14.5%</span></div><div><small>Lv5リロール · 採用率 0.13</small><b>リフトビースト ペブルス＆クルーグ</b><span>平均4.17 · Top4 56.1% · 1位10.7%</span></div><div><small>Lv7リロール · 採用率 0.27</small><b>ブロッサム マスター・イー＆コグ＝マウ</b><span>平均4.27 · Top4 55.3% · 1位14.1%</span></div></div><p class="vod-caution">開幕直後は母数が小さく上振れが大きいため、進行駒の確定評価はステージ別データの蓄積後に行います。</p></section>`;
}

function renderLiveItems(){
  return `<section class="panel progression-panel"><div class="panel-head"><div><h2>全体平均：高使用率アイテム</h2><p>tactics.tools · Patch 18.1 LIVE · Platinum+。世界上位50の個別装備履歴とは混ぜず、全体基準として表示</p></div><span class="sync-badge">LIVE</span></div><div class="artifact-catalog">${liveItems.map((item,i)=>`<article class="catalog-card">${itemImage(item.name,"catalog-image")}<div class="catalog-main"><small>#${i+1} · 使用率順</small><h3>${item.name}</h3><div class="catalog-stats"><span>採用率<b>${item.play}/8</b></span><span>平均<b>${item.avg}</b></span><span>Top4<b>${item.top4}%</b></span><span>1位<b>${item.win}%</b></span></div></div></article>`).join("")}</div><p class="vod-caution">順位表はTop Carriesのみ公開しており、選手別の全アイテム履歴は含みません。そのため上位50アイテムの差分は、誤った推定値を出さず「取得待ち」としています。</p></section>`;
}

function renderEliteUnits(){
  return `<section class="panel progression-panel"><div class="panel-head"><div><h2>世界上位50 vs 全体平均</h2><p>上位50名×Top Carries 5枠＝250枠 · 2026-08-28取得</p></div><span class="sync-badge">50 / 50</span></div><div class="table-wrap"><table><thead><tr><th>駒</th><th>上位50 採用人数</th><th>上位50 使用率</th><th>全体盤面率</th><th>差</th></tr></thead><tbody>${eliteUnitUsage.map(u=>`<tr><td class="player-cell">${championImage(u.name,"item-thumb")} ${u.name}</td><td>${u.count} / 50</td><td><b>${u.elite.toFixed(1)}%</b></td><td>${u.overall.toFixed(1)}%</td><td class="${u.delta>=0?"gain":"loss"}">${u.delta>=0?"+":""}${u.delta.toFixed(1)}pt</td></tr>`).join("")}</tbody></table></div><p class="vod-caution">上位50は各選手のTop Carriesに登場したか、全体はPlatinum+の1ロビー8人あたり採用数÷8で比較。対象期間と指標が完全一致しないため、差は傾向確認用です。</p></section>`;
}

function renderPlayers(){
  return `<div class="view"><div class="data-source"><b>18.1 LIVE</b><span>tactics.tools · グローバル上位50名を取得 · 2026-08-28更新。レート順位は開幕直後のため急変します。</span></div><div class="section-head"><div><h2>現在のグローバル上位10名</h2><p>順位、地域、現在レート、試合数、Top4率、1位率を表示しています。</p></div></div><section class="panel"><div class="table-wrap"><table><thead><tr><th>順位</th><th>プレイヤー</th><th>地域</th><th>現在レート</th><th>試合</th><th>Top4率</th><th>1位率</th></tr></thead><tbody>${liveLeaders.map((p,i)=>`<tr><td class="rank">#${i+1}</td><td class="player-cell">${p.name}</td><td>${p.region}</td><td class="lp">${p.rate}</td><td>${p.games}</td><td>${p.top4.toFixed(1)}%</td><td>${p.win.toFixed(1)}%</td></tr>`).join("")}</tbody></table></div></section>${renderEliteUnits()}</div>`;
  return `<div class="view"><div class="data-source warning"><b>LIVE同期待ち</b><span>下表はUI確認用サンプルで、実在ランキングではありません。Set 18の15地域ランキング取得後に置き換えます。</span></div><div class="section-head"><div><h2>チャレンジャーランキング</h2><p>LIVE実測への切り替え待ちです。</p></div></div><section class="panel">${leaderboard(filteredPlayers(),true)}</section></div>`;
}

function renderUnits(){
  return `<div class="view"><div class="data-source"><b>18.1 LIVE</b><span>tactics.tools · Bronze+ · 採用率と平均順位を併用。極端に低採用の上振れ駒は除外。</span></div><div class="section-head"><div><h2>使用率が高く、成績も良い駒</h2><p>採用率を優先し、その中で平均順位が良い駒を表示しています。</p></div></div><div class="card-grid">${livePowerUnits.map((u,i)=>`<article class="unit-card"><div class="unit-card-top">${championImage(u.name,"unit-portrait")}<div><h3>${i+1}. ${u.name}</h3><small>Patch 18.1 LIVE</small></div></div><div class="mini-metrics"><span>採用率<b>${u.play.toFixed(2)}</b></span><span>平均順位<b>${u.avg.toFixed(2)}</b></span><span>評価<b>${u.play>=1&&u.avg<=4.2?"高採用":"強成績"}</b></span></div><p class="build-label">よく使われる構成内アイテム</p><div class="build-list">${u.items.map((item,n)=>`<span title="${item}">${itemImage(item,"item-thumb")}<i>${n+1}</i><b>${item}</b></span>`).join("")}</div></article>`).join("")}</div><p class="vod-caution">駒の平均順位はコストの影響を強く受けます。単純な全コスト比較ではなく、採用率と構成内での役割を合わせて判断してください。</p></div>`;
  return `<div class="view"><div class="data-source warning"><b>統計未接続</b><span>駒単体の平均順位・Top4率・使用率は、PBE実測データを取得できるまで表示しません。画像：MetaTFT CDN。</span></div><div class="section-head"><div><h2>Set 18 駒別の装備候補</h2><p>駒とアイテムを画像で識別。画像にカーソルを合わせると名前も確認できます。</p></div></div><div class="card-grid">${units.map(u=>`<article class="unit-card"><div class="unit-card-top">${championImage(u.name,"unit-portrait")}<div><h3>${u.name}</h3><small>${u.cost}コスト</small><div class="trait-tags">${u.traits.map(t=>`<span>${t}</span>`).join("")}</div></div></div><div class="pending-metrics"><span>平均順位</span><b>データ未取得</b><small>装備時・★数・ステージなどの条件別集計が必要です</small></div><p class="build-label">装備候補（未検証）</p><div class="build-list">${u.items.map((i,n)=>`<span title="${i}">${itemImage(i,"item-thumb")}<i>${n+1}</i><b>${i}</b></span>`).join("")}</div><p class="build-label alt">代替候補（未検証）</p><div class="alt-items">${u.alts.map(i=>`<span title="${i}">${itemImage(i,"item-thumb small")}<b>${i}</b></span>`).join("")}</div></article>`).join("")}</div></div>`;
}

function renderArtifacts(){
  return `<div class="view"><div class="data-source"><b>PBE 18.1 Aug-10</b><span>MetaTFT · 過去3日間 · 740,208構成 · 全31種を平均順位順に表示</span></div><div class="section-head"><div><h2>アーティファクト全一覧</h2><p>1アーティファクトを1行にまとめ、平均順位順に素早く比較できます。</p></div></div><div class="impact-legend"><span><i class="positive-dot"></i>マイナス：4.50位より良い</span><span><i class="negative-dot"></i>プラス：4.50位より悪い</span><small>装備した盤面との相関値であり、装備単体の因果効果ではありません。</small></div><div class="artifact-catalog artifact-list">${artifactCatalog.map(a=>`<article class="catalog-card">${artifactFileImage(a)}<div class="catalog-main"><small>#${a.rank} · Tier ${a.tier}</small><h3>${a.name}</h3><div class="catalog-stats"><span>平均<b>${a.avg.toFixed(2)}</b></span><span>4.50比<b class="${a.delta<=0?"gain":"loss"}">${a.delta>0?"+": ""}${a.delta.toFixed(2)}</b></span><span>勝率<b>${a.win}%</b></span><span>使用率<b>${a.freq}%</b></span></div></div></article>`).join("")}</div><div class="section-head artifact-detail-head"><div><h2>装備先データ取得済み</h2><p>駒の横に、その駒が装備した場合の平均順位を表示します。未確認値は推定しません。</p></div></div><div class="artifact-grid">${artifacts.map(a=>`<article class="artifact-card"><div class="artifact-head">${artifactImage(a.name)}<div><h3>${a.name}</h3><span>${a.type}</span></div><div class="artifact-score"><b>${a.avg.toFixed(2)}</b><small>全装備先平均</small></div></div><div class="impact-summary">${impactBadge(a.avg,neutralPlacement,"4.50位との比較")}</div><p class="artifact-note">${a.note}</p><div class="holder-list">${a.holders.map((h,i)=>{const avg=holderAverage(a.name,h);return `<div>${championImage(h,"holder-thumb")}<span class="holder-rank">${i+1}</span><b>${h}</b><small>${avg===undefined?"平均 未取得":`平均 ${avg.toFixed(2)}位`}</small></div>`}).join("")}</div><div class="artifact-foot"><span>勝率 <b>${a.win}%</b></span><span>PBE実測</span></div></article>`).join("")}</div></div>`;
}

function renderEmblems(){
  return `<div class="view"><div class="data-source"><b>18.1 LIVE</b><span>tactics.tools · Platinum+ · 196k構成 · 2026-08-28 09:00取得。重複表示のFlora Fatalisは成績の良い有効行へ統合。</span></div><div class="section-head"><div><h2>紋章一覧とおすすめ装備先</h2><p>平均順位順。行をクリックすると、上位装備先と構成候補をまとめて確認できます。</p></div></div><div class="emblem-list">${[...emblems].sort((a,b)=>a.avg-b.avg).map(e=>`<button class="emblem-row" type="button" data-emblem="${e.name}">${emblemImage(e,"emblem-icon")}<span class="emblem-name"><small>#${e.rank} · ${e.en}</small><b>${e.name}の紋章</b></span><span class="emblem-metric"><small>採用率</small><b>${e.play.toFixed(2)}/8</b></span><span class="emblem-metric"><small>平均順位</small><b>${e.avg.toFixed(2)}</b></span><span class="emblem-metric"><small>Top4</small><b>${e.top4.toFixed(1)}%</b></span><span class="emblem-metric"><small>1位</small><b>${e.win.toFixed(1)}%</b></span><span class="emblem-holders">${e.holders.length?e.holders.slice(0,3).map(h=>`${championImage(h,"holder-thumb")}<i>${h}</i>`).join(""):`<i>装備先データ待ち</i>`}</span><span class="emblem-open">詳細 ›</span></button>`).join("")}</div><p class="vod-caution">おすすめ構成は各紋章の上位装備先から導いた構成候補です。構成単位の平均順位が取得できていないものは、紋章単体の成績と分けて表示します。</p></div>`;
}

function renderTraits(){
  return `<div class="view"><div class="data-source"><b>PBE 18.1 Aug-10</b><span>MetaTFT · 過去3日間 · 690,976構成 · 平均順位の昇順</span></div><div class="section-head"><div><h2>PBEシナジーランキング</h2><p>発動レベルを含む特性成績。平均順位が良い順です。</p></div></div><div class="trait-grid">${traits.map((t,i)=>`<article class="trait-card"><div class="trait-top"><div class="trait-name"><div class="trait-symbol"><span>${t.symbol}</span></div><div><h3>${i+1}. ${t.name}</h3><small class="region">発動 ${t.levels}</small></div></div><div class="trait-rate"><b>${t.avg}</b><small>平均順位</small></div></div><div class="trait-metrics"><span>Tier <b>${t.tier}</b></span><span>勝率 <b>${t.win}%</b></span><span>頻度 <b>${t.play}%</b></span></div><div class="bar"><i style="width:${Math.min(t.play*2.8,100)}%"></i></div></article>`).join("")}</div></div>`;
}

function renderVod(){
  const base="https://www.youtube.com/watch?v=OEFwrh5vV3M";
  return `<div class="view"><div class="data-source vod-source"><b>最新VODの最後3試合</b><span>2026-08-12 · Patch 18.1 PBE · YouTube自動字幕を日本語で要約</span><a href="${base}" target="_blank" rel="noreferrer">元動画 ↗</a></div><div class="section-head"><div><h2>セット18：高レベルプレイヤーの判断</h2><p><b class="source-key spoken">本人発言</b> はWasianiversonの発言内容。<b class="source-key inferred">分析</b> は発言と試合展開をもとにしたMetaScope側の解釈です。</p></div></div><div class="vod-summary"><strong>3試合から共通して学べること</strong><span>① チャーム購入とリロール資金を競合させない</span><span>② 火力不足と前衛不足を分けて診断する</span><span>③ 勝ち切れない局面では順位確保へ目標を変える</span></div><div class="vod-grid">${wasianGames.map(g=>`<article class="vod-card"><div class="vod-head"><div><small>GAME ${g.game} · ${g.time}</small><h3>${g.line}</h3></div><span class="placement">${g.result}</span></div><div class="vod-points">${g.points.map(p=>`<a href="${base}&t=${p.sec}s" target="_blank" rel="noreferrer"><span class="source-key spoken">本人発言</span><time>${p.at}</time><p>${p.text}</p><i>動画を開く ↗</i></a>`).join("")}</div><div class="vod-analysis"><span class="source-key inferred">MetaScope分析</span><p>${g.analysis}</p></div></article>`).join("")}</div><p class="vod-caution">自動字幕には固有名詞の誤認識があります。ここでは文脈を確認できた発言だけを要約し、逐語訳ではなくプレイ判断が伝わる日本語にしています。</p></div>`;
}

function bindRows(){
  document.querySelectorAll("[data-player]").forEach(row=>row.addEventListener("click",()=>openPlayer(players.find(p=>p.name===row.dataset.player))));
  document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>setView(b.dataset.go)));
  document.querySelectorAll(".holder-list > div").forEach(holder=>holder.addEventListener("click",()=>{
    const champion=holder.querySelector("b")?.textContent;
    const artifact=holder.closest(".artifact-card")?.querySelector(".artifact-head h3")?.textContent;
    openArtifactHolder(champion,artifact);
  }));
  document.querySelectorAll("[data-emblem]").forEach(row=>row.addEventListener("click",()=>openEmblem(emblems.find(e=>e.name===row.dataset.emblem))));
}

function hydrateArtifactRecommendations(){
  document.querySelectorAll(".artifact-catalog .catalog-card").forEach(card=>{
    const name=card.querySelector("h3")?.textContent;
    const detail=artifacts.find(a=>a.name===name);
    const row=document.createElement("div");
    row.className="catalog-holders";
    row.innerHTML=detail?`<small>PBE相性上位 · LIVE更新待ち</small>${detail.holders.slice(0,3).map(h=>{const avg=holderAverage(name,h);return `<button type="button" title="${h}${avg===undefined?"":` · 平均${avg.toFixed(2)}位`}" data-holder="${h}" data-artifact="${name}">${championImage(h,"holder-thumb")}<span>${avg===undefined?"—":avg.toFixed(2)}</span></button>`}).join("")}`:`<small>相性駒 LIVE集計中</small>`;
    card.querySelector(".catalog-main")?.appendChild(row);
  });
  document.querySelectorAll(".catalog-holders [data-holder]").forEach(button=>button.addEventListener("click",()=>openArtifactHolder(button.dataset.holder,button.dataset.artifact)));
}

function render(){
  document.querySelector("#page-title").textContent=titles[state.view];
  root.innerHTML=({overview:renderOverview,players:renderPlayers,units:renderUnits,artifacts:renderArtifacts,emblems:renderEmblems,traits:renderTraits,vod:renderVod})[state.view]();
  if(state.view==="overview") root.querySelector(".view")?.insertAdjacentHTML("beforeend",renderProgression());
  if(state.view==="units") root.querySelector(".view")?.insertAdjacentHTML("beforeend",renderLiveItems());
  if(state.view==="units") root.querySelector(".data-source span").textContent="tactics.tools · Gold+ · 採用率と平均順位を併用。極端に低採用の上振れ駒は除外。";
  if(state.view==="artifacts") hydrateArtifactRecommendations();
  bindRows();
}

function setView(view){
  state.view=view;
  document.querySelectorAll(".nav-item").forEach(x=>x.classList.toggle("active",x.dataset.view===view));
  render();
}

function openPlayer(p){
  if(!p)return;
  document.querySelector("#player-detail").innerHTML=`<div class="detail"><div class="detail-hero"><div class="avatar">${p.name.slice(0,2)}</div><div><h2>${p.name}</h2><p>${p.region} · Challenger #${p.rank} · Set 18 PBEプレビュー</p></div></div><div class="preview-banner player-warning"><b>サンプル成績</b><span>このLP・平均順位・Top 4率は実測接続前のUI確認用です。</span></div><div class="detail-stats"><div><small>現在LP</small><b>${p.lp}</b></div><div><small>${state.period}増減</small><b class="${p.gain>=0?"gain":"loss"}">${p.gain>=0?"+":""}${p.gain}</b></div><div><small>平均順位</small><b>${p.avg.toFixed(2)}</b></div><div><small>Top 4率</small><b>${p.top4}%</b></div></div><div class="matches unavailable"><h3>直近の試合構成</h3><div class="pending-metrics"><span>Set 18 シナジー・駒・順位</span><b>データ未接続</b><small>古いセットの名称は表示しないよう削除しました。</small></div></div></div>`;
  document.querySelector("#player-modal").showModal();
}

function openEmblem(e){
  if(!e)return;
  document.querySelector("#player-detail").innerHTML=`<div class="detail"><div class="detail-hero">${emblemImage(e,"unit-portrait")}<div><h2>${e.name}の紋章</h2><p>Patch 18.1 LIVE · Platinum+ · tactics.tools</p></div></div><div class="detail-stats"><div><small>採用率</small><b>${e.play.toFixed(2)}/8</b></div><div><small>平均順位</small><b>${e.avg.toFixed(2)}</b></div><div><small>Top4率</small><b>${e.top4.toFixed(1)}%</b></div><div><small>1位率</small><b>${e.win.toFixed(1)}%</b></div></div><div class="matches"><h3>おすすめの持たせ先</h3><div class="emblem-modal-holders">${e.holders.length?e.holders.map((h,i)=>`<div>${championImage(h,"unit-portrait")}<span>#${i+1}</span><b>${h}</b><small>LIVE上位装備先</small></div>`).join(""):`<div class="comp-placeholder"><b>装備先データ待ち</b><span>サンプルが公開され次第追加します。</span></div>`}</div></div><div class="matches"><h3>おすすめ構成候補</h3><div class="comp-placeholder"><b>${e.comp}</b><span>${e.name}の発動段階を1つ上げ、上位装備先を主力またはサブ主力として採用する形です。</span></div></div><p class="vod-caution">構成候補は上位装備先からの推定です。紋章自体の平均順位・Top4率・1位率はLIVE実測ですが、構成候補の成績とは別指標です。</p></div>`;
  document.querySelector("#player-modal").showModal();
}

function openArtifactHolder(champion,artifact){
  if(!champion||!artifact)return;
  document.querySelector("#player-detail").innerHTML=`<div class="detail"><div class="detail-hero">${championImage(champion,"unit-portrait")}<div><h2>${champion}</h2><p>${artifact} 装備時のおすすめ構成</p></div></div><div class="preview-banner player-warning"><b>LIVE同期待ち</b><span>Set 18 LIVEの構成統計が公開され次第、この画面へ自動反映します。</span></div><div class="detail-stats"><div><small>装備時平均順位</small><b>取得待ち</b></div><div><small>Top 4率</small><b>取得待ち</b></div><div><small>採用試合数</small><b>取得待ち</b></div><div><small>順位改善幅</small><b>取得待ち</b></div></div><div class="matches"><h3>おすすめ構成</h3><div class="comp-placeholder"><b>構成候補を集計中</b><span>主力駒、前衛、発動シナジー、配置、通常装備、進行盤面を表示予定です。</span></div></div><div class="progression-mini"><h3>この駒を使う進行</h3><div><span>序盤</span><b>保持役と代替装備を表示</b></div><div><span>中盤</span><b>入れ替えタイミングを表示</b></div><div><span>終盤</span><b>完成構成と配置を表示</b></div></div></div>`;
  document.querySelector("#player-modal").showModal();
}

document.querySelectorAll(".nav-item").forEach(b=>b.addEventListener("click",()=>setView(b.dataset.view)));
document.querySelector("#region-filter").addEventListener("change",e=>{state.region=e.target.value;render();});
document.querySelector("#period-filter").addEventListener("change",e=>{state.period=e.target.value;render();});
document.querySelector("#global-search").addEventListener("input",e=>{state.query=e.target.value; if(state.query) setView("players"); else render();});
document.querySelector(".dialog-close").addEventListener("click",()=>document.querySelector("#player-modal").close());
document.querySelector("#player-modal").addEventListener("click",e=>{if(e.target.id==="player-modal")e.target.close();});
render();
