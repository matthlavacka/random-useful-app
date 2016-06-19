clickCounter = 0;

function usefulAppButton( button, popup ) {

	// UI elements
	var buttonElement = button;
	var popupElement = popup;

	var initialClick = false;

	var device = null;

	// Useful aps: url
	var appList = {
		iphone: [
			'https://itunes.apple.com/us/app/reddit-the-official-app/id1064216828',
			'https://itunes.apple.com/gb/app/buffer-for-twitter-facebook/id490474324',
			'https://itunes.apple.com/us/app/if-by-ifttt/id660944635',
			'https://itunes.apple.com/us/app/ihandy-level-free/id299852753',
			'https://itunes.apple.com/us/app/hopper-airfare-predictions/id904052407',
			'https://itunes.apple.com/us/app/hipstamatic-camera/id342115564',
			'https://itunes.apple.com/us/app/gif-keyboard/id917932200',
			'https://itunes.apple.com/us/app/burner-next-generation-phone/id505800761',
			'https://itunes.apple.com/us/app/paper-notes-photo-annotation/id506003812',
			'https://itunes.apple.com/gb/app/giphy.-all-the-gifs/id974748812',
			'https://itunes.apple.com/us/app/lemon-optimize-your-money/id984740998',
			'https://itunes.apple.com/gb/app/stack/id1080487957',
			'https://itunes.apple.com/gb/app/live-wallpapers-for-lock-screen/id1067651799',
			'https://itunes.apple.com/gb/app/movesum/id1064026338',
			'https://itunes.apple.com/gb/app/boomerang-from-instagram/id1041596399',
			'https://itunes.apple.com/gb/app/luckytrip-a-trip-in-one-tap/id973059290',
			'https://itunes.apple.com/gb/app/itranslate-translator-dictionary/id288113403',
			'https://itunes.apple.com/gb/app/gif-for-messenger/id973610776',
			'https://itunes.apple.com/gb/app/layout-from-instagram/id967351793',
			'https://itunes.apple.com/gb/app/keyboard-sound-customize-typing/id837220095',
			'https://itunes.apple.com/gb/app/subscriptme-personal-finance/id963594756',
			'https://itunes.apple.com/gb/app/transferwise-money-transfer/id612261027',
			'https://itunes.apple.com/US/app/id438475005',
			'https://itunes.apple.com/gb/app/snowidget-most-magical-widget/id933278113',
			'https://itunes.apple.com/gb/app/vivino-wine-scanner/id414461255',
			'https://itunes.apple.com/gb/app/telegraph-fantasy-football/id386772086',
			'https://itunes.apple.com/gb/app/google-analytics/id881599038',
			'https://itunes.apple.com/gb/app/pedometer++/id712286167',
			'https://itunes.apple.com/gb/app/myscript-calculator/id578979413',
			'https://itunes.apple.com/gb/app/up-coffee/id828031130',
			'https://itunes.apple.com/gb/app/duolingo-learn-languages-for/id570060128',
			'https://itunes.apple.com/gb/app/jelly/id685652528',
			'https://itunes.apple.com/gb/app/feedly-reader/id396069556',
			'https://itunes.apple.com/app/popflake/id1090511655',
			'https://itunes.apple.com/gb/app/quora/id456034437',
			'https://itunes.apple.com/gb/app/aroundme/id290051590',
			'https://itunes.apple.com/us/app/shazam/id284993459',
			'https://itunes.apple.com/gb/app/dubsmash/id918820076',
			'https://itunes.apple.com/gb/app/musical.ly-your-music-video/id835599320',
			'https://itunes.apple.com/gb/app/vsco-cam/id588013838',
			'https://itunes.apple.com/gb/app/any.do-task-to-do-list/id497328576',
			'https://itunes.apple.com/gb/app/dictionary.com-dictionary/id364740856',
			'https://itunes.apple.com/gb/app/just-eat-takeaway-food-delivery/id566347057',
			'https://itunes.apple.com/app/apple-store/id1093946237',
			'https://itunes.apple.com/gb/app/instapaper/id288545208',
			'https://geo.itunes.apple.com/us/app/wikipedia-mobile/id324715238',
			'https://geo.itunes.apple.com/us/app/bigoven-350-000+-recipes-grocery/id294363034',
			'https://geo.itunes.apple.com/us/app/food-network-in-the-kitchen/id399072152',
			'https://itunes.apple.com/us/app/modern-atlas-travel-guide/id1068556466',
			'https://geo.itunes.apple.com/us/app/limbo/id656951157',
			'https://geo.itunes.apple.com/us/app/hearthstone-heroes-warcraft/id625257520',
			'https://itunes.apple.com/us/app/instant-esports-lol-news-scores/id908957229',
			'https://geo.itunes.apple.com/us/app/pandora-free-music-radio/id284035177',
			'https://geo.itunes.apple.com/us/app/splitwise-split-bills-expenses/id458023433',
			'https://geo.itunes.apple.com/us/app/pro-hdr-x/id927823151',
			'https://geo.itunes.apple.com/us/app/goodreads-book-recommendations/id355833469',
			'https://geo.itunes.apple.com/us/app/audible-audio-books-original/id379693831',
			'https://geo.itunes.apple.com/us/app/genius-scan-pdf-scanner/id377672876',
			'https://geo.itunes.apple.com/us/app/sugarsync/id288491637',
			'https://geo.itunes.apple.com/us/app/google-photos-free-photo-video/id962194608',
			'https://geo.itunes.apple.com/us/app/periscope/id972909677',
			'https://itunes.apple.com/en/app/imdb-movies-tv/id342792525',
			'https://itunes.apple.com/gb/app/younow-live-stream-video-chat/id471347413',
			'https://itunes.apple.com/us/app/insta-grid-post-split-photo/id1014917264',
			'https://itunes.apple.com/us/app/imusic-perfect-music-player/id487677479',
			'https://itunes.apple.com/us/app/wattpad-free-books-ebook-reader/id306310789',
		],
		android: [
			'https://play.google.com/store/apps/details?id=net.darksky.darksky',
			'https://play.google.com/store/apps/details?id=com.abbyy.mobile.textgrabber.full',
			'https://play.google.com/store/apps/details?id=com.facebook.lite',
			'https://play.google.com/store/apps/details?id=com.spotify.mobile.android.ui',
			'https://play.google.com/store/apps/details?id=com.strava',
			'https://play.google.com/store/apps/details?id=com.evernote',
			'https://play.google.com/store/apps/details?id=com.ideashower.readitlater.pro',
			'https://play.google.com/store/apps/details?id=com.pushbullet.android',
			'https://play.google.com/store/apps/details?id=tv.periscope.android',
			'https://play.google.com/store/apps/details?id=com.timehop',
			'https://play.google.com/store/apps/details?id=com.niksoftware.snapseed',
			'https://play.google.com/store/apps/details?id=com.google.android.apps.photos',
			'https://play.google.com/store/apps/details?id=com.citymapper.app.release',
			'https://play.google.com/store/apps/details?id=org.videolan.vlc',
			'https://play.google.com/store/apps/details?id=com.morecast.weather',
			'https://play.google.com/store/apps/details?id=com.coverscreen.cover',
			'https://play.google.com/store/apps/details?id=com.ifttt.ifttt',
			'https://play.google.com/store/apps/details?id=com.google.android.apps.cultural',
			'https://play.google.com/store/apps/details?id=io.hellocode.javvy',
			'https://play.google.com/store/apps/details?id=com.nintendo.zaaa',
			'https://play.google.com/store/apps/details?id=com.paypal.android.p2pmobile',
			'https://play.google.com/store/apps/details?id=com.issuu.android.app',
			'https://play.google.com/store/apps/details?id=io.tapdeck.android',
			'https://play.google.com/store/apps/details?id=com.airbnb.android',
			'https://play.google.com/store/apps/details?id=com.duolingo',
			'https://play.google.com/store/apps/details?id=com.inkboard.animatic',
			'https://play.google.com/store/apps/details?id=com.htc.pitroad',
			'https://play.google.com/store/apps/details?id=com.myfitnesspal.android',
			'https://play.google.com/store/apps/details?id=com.kickstarter.kickstarter',
			'https://play.google.com/store/apps/details?id=com.adobe.lrmobile',
			'https://play.google.com/store/apps/details?id=mobi.mgeek.TunnyBrowser',
			'https://play.google.com/store/apps/details?id=com.endomondo.android',
			'https://play.google.com/store/apps/details?id=com.jnj.sevenminuteworkout',
			'https://play.google.com/store/apps/details?id=org.wikipedia',
			'https://play.google.com/store/apps/details?id=net.skyscanner.android.main',
			'https://play.google.com/store/apps/details?id=com.fivemobile.thescore',
			'https://play.google.com/store/apps/details?id=net.zedge.android',
			'https://play.google.com/store/apps/details?id=com.urbandroid.lux',
			'https://play.google.com/store/apps/details?id=com.adsk.sketchbookhdexpress',
			'https://play.google.com/store/apps/details?id=com.getkeepsafe.applock',
			'https://play.google.com/store/apps/details?id=co.twickets.droid',
			'https://play.google.com/store/apps/details?id=com.appxy.tinyscanner',
			'https://play.google.com/store/apps/details?id=com.devhd.feedly',
			'https://play.google.com/store/apps/details?id=com.nll.acr',
			'https://play.google.com/store/apps/details?id=com.chimbori.hermitcrab',
			'https://play.google.com/store/apps/details?id=com.skillshare.Skillshare',
			'https://play.google.com/store/apps/details?id=com.adobe.photoshopmix',
			'https://play.google.com/store/apps/details?id=me.ccrama.redditslide',
			'https://play.google.com/store/apps/details?id=com.touchtype.swiftkey',
			'https://play.google.com/store/apps/details?id=com.giphy.messenger',
			'https://play.google.com/store/apps/details?id=com.koushikdutta.backup',
			'https://play.google.com/store/apps/details?id=com.actionlauncher.playstore',
			'https://play.google.com/store/apps/details?id=com.mindfulnesseverywhere.sleepfulness',
			'https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically',
			'https://play.google.com/store/apps/details?id=wp.wattpad',
			'https://play.google.com/store/apps/details?id=com.vsco.cam',
			'https://play.google.com/store/apps/details?id=com.free.pandora.radio.guide',
		]
	};

	var sites = [];

	// Prepares and binds the button
	var init = function() {

		button.onclick = onButtonClick;

		sites = getDevice();

		document.getElementById( 'device' ).innerHTML = device;

		// If the Browser supports html5 storage
		if ( supportsHtmlStorage() === true ) {

			// Check for past data
			if ( localStorage[ 'sites' ] !== undefined ) {
				loadSites();
			}
		}
	};

	// Get current device
	var getDevice = function() {
	  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

	  if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
	  {
	  	device = 'iPhone';
	    return appList.iphone;
	  }
	  else if( userAgent.match( /Android/i ) )
	  {
	  	device = 'Android';
	    return appList.android;
	  }
	  else
	  {
	  	device = 'iPhone or Android';
	  	var iphoneList = appList.iphone;
	  	return iphoneList.concat(appList.android);
	  }
	}

	// Selects and removes the next website from the list
	var selectWebsite = function() {

		var site, index;
		
		index = Math.floor( Math.random() * sites.length );

		site = sites[index];
		sites.splice( index, 1 );

		return site;
	};

	// Opens the given url in a new window
	var openSite = function( url ) {
		window.open( url );
	};

	var onButtonClick = function() {

		// Track click count.
		_gaq.push(['_trackEvent', 'user', 'click', 'site']);

		// Change text from "TO A"
		if ( initialClick === false ) {
			document.getElementById( 'joint' ).innerHTML = 'TO ANOTHER';
			initialClick = true;
		}

		var url = selectWebsite();
  	openSite( url );

  	// User has visited ALL the sites... refresh the list.
  	if ( sites.length == 0 ) {
  		_gaq.push(['_trackEvent', 'user', 'click', 'allSites']);
			sites = getDevice();
  	}

  	clickCounter += 1;

  	storeSites();
	};

	// Save the current list of sites for the new user.
	var storeSites = function() {
		localStorage[ 'sites' ] = JSON.stringify( sites );
	}

	// Load the list of sites, so new users see new sites.
	var loadSites = function() {
		sites = JSON.parse( localStorage['sites'] );
	};

	init();
}
