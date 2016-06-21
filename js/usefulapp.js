function usefulAppButton( button, popup ) {

	var count = new Firebase('https://randomusefulapp.firebaseio.com/');

	count.on('value', function f(s) {
	    $('#counting').text( numberWithCommas(0 + s.val()) );
	});

	// UI elements
	var buttonElement = button;
	var popupElement = popup;

	var initialClick = false;

	var device = null;

	// Useful aps: url
	var appList = {
		iphone: [
		  'https://itunes.apple.com/gb/app/feedly-reader/id396069556',
		  'https://itunes.apple.com/us/app/gif-keyboard/id917932200',
		  'https://itunes.apple.com/us/app/hopper-airfare-predictions/id904052407',
		  'https://itunes.apple.com/us/app/ihandy-level-free/id299852753',
		  'https://itunes.apple.com/us/app/burner-next-generation-phone/id505800761',
		  'https://itunes.apple.com/us/app/paper-notes-photo-annotation/id506003812',
		  'https://itunes.apple.com/gb/app/movesum/id1064026338',
		  'https://itunes.apple.com/us/app/fake-excuse-hangup-now!-*free*/id354650766',
		  'https://itunes.apple.com/gb/app/luckytrip-a-trip-in-one-tap/id973059290',
		  'https://itunes.apple.com/gb/app/keyboard-sound-customize-typing/id837220095',
		  'https://itunes.apple.com/US/app/id438475005',
		  'https://itunes.apple.com/gb/app/vivino-wine-scanner/id414461255',
		  'https://itunes.apple.com/gb/app/pedometer++/id712286167',
		  'https://itunes.apple.com/gb/app/myscript-calculator/id578979413',
		  'https://itunes.apple.com/gb/app/up-coffee/id828031130',
		  'https://itunes.apple.com/app/popflake/id1090511655',
		  'https://itunes.apple.com/gb/app/aroundme/id290051590',
		  'https://geo.itunes.apple.com/us/app/bigoven-350-000+-recipes-grocery/id294363034',
		  'https://geo.itunes.apple.com/us/app/splitwise-split-bills-expenses/id458023433',
		  'https://geo.itunes.apple.com/us/app/genius-scan-pdf-scanner/id377672876',
		  'https://itunes.apple.com/us/app/imusic-perfect-music-player/id487677479',
		  'https://itunes.apple.com/us/app/adblock-pro-safari/id1018301773',
		  'https://itunes.apple.com/us/app/speedtest.net-speed-test/id300704847',
		  'https://itunes.apple.com/us/app/isitter-baby-monitor-wifi/id439592371',
		  'https://itunes.apple.com/en/app/magicplan/id427424432',
		  'https://itunes.apple.com/us/app/decibel-10th-professional/id448155923',
		  'https://itunes.apple.com/us/app/wifimapper-free-wifi-maps/id935258365',
		  'https://itunes.apple.com/us/app/relax-melodies-sleep-zen-sounds/id314498713',
		  'https://itunes.apple.com/us/app/eat-this-much/id981637806',
		  'https://itunes.apple.com/us/app/countdown!!-event-reminders/id424216726',
		  'https://itunes.apple.com/en/app/pocket-save-articles-videos/id309601447',
		  'https://itunes.apple.com/us/app/runpee.com/id450326239',
		  'https://itunes.apple.com/us/app/hours-keeper-time-tracking/id563155321',
		  'https://itunes.apple.com/us/app/pepfeed-shopping-companion/id1040446613',
		  'https://itunes.apple.com/us/app/price-alert-for-amazon/id1035665126',
		  'https://itunes.apple.com/us/app/veg-recipes-india-most-popular/id1064347712',
		  'https://itunes.apple.com/us/app/pushbullet/id810352052',
		  'https://itunes.apple.com/us/app/fake-text-free-fake-text-free/id340790528',
		  'https://itunes.apple.com/us/app/watching-cute-girl/id564115042',
		  'https://itunes.apple.com/us/app/inap-work/id310546791',
		  'https://itunes.apple.com/us/app/resuscitation!/id553887736',
		  'https://itunes.apple.com/app/dog-whistler-your-free-dog/id306614060',
		  'https://itunes.apple.com/us/app/find-your-car-ar-augmented/id370836023',
		  'https://itunes.apple.com/us/app/sheep-counter-free/id449022082',
		  'https://itunes.apple.com/us/app/filethis-fetch-deliver-bills/id635940919',
		],
		android: [
		  'https://play.google.com/store/apps/details?id=com.wikitude',
			'https://play.google.com/store/apps/details?id=net.darksky.darksky',
			'https://play.google.com/store/apps/details?id=jmd.rainymood',
			'https://play.google.com/store/apps/details?id=freemoviesapp.com',
			'https://play.google.com/store/apps/details?id=com.eatthismuch',
			'https://play.google.com/store/apps/details?id=com.pushbullet.android',
			'https://play.google.com/store/apps/details?id=com.abbyy.mobile.textgrabber.full',
			'https://play.google.com/store/apps/details?id=com.ideashower.readitlater.pro',
			'https://play.google.com/store/apps/details?id=com.niksoftware.snapseed',
			'https://play.google.com/store/apps/details?id=com.citymapper.app.release',
			'https://play.google.com/store/apps/details?id=org.videolan.vlc',
			'https://play.google.com/store/apps/details?id=com.morecast.weather',
			'https://play.google.com/store/apps/details?id=com.coverscreen.cover',
			'https://play.google.com/store/apps/details?id=io.tapdeck.android',
			'https://play.google.com/store/apps/details?id=com.myfitnesspal.android',
			'https://play.google.com/store/apps/details?id=com.adobe.lrmobile',
			'https://play.google.com/store/apps/details?id=com.nomadrobot.mycarlocatorfree',
			'https://play.google.com/store/apps/details?id=com.jnj.sevenminuteworkout',
			'https://play.google.com/store/apps/details?id=net.skyscanner.android.main',
			'https://play.google.com/store/apps/details?id=com.urbandroid.lux',
			'https://play.google.com/store/apps/details?id=com.getkeepsafe.applock',
			'https://play.google.com/store/apps/details?id=com.appxy.tinyscanner',
			'https://play.google.com/store/apps/details?id=com.devhd.feedly',
			'https://play.google.com/store/apps/details?id=com.nll.acr',
			'https://play.google.com/store/apps/details?id=com.chimbori.hermitcrab',
			'https://play.google.com/store/apps/details?id=com.skillshare.Skillshare',
			'https://play.google.com/store/apps/details?id=com.adobe.photoshopmix',
			'https://play.google.com/store/apps/details?id=me.ccrama.redditslide',
			'https://play.google.com/store/apps/details?id=com.touchtype.swiftkey',
			'https://play.google.com/store/apps/details?id=com.giphy.messenger',
			'https://play.google.com/store/apps/details?id=com.mindfulnesseverywhere.sleepfulness',
			'https://play.google.com/store/apps/details?id=com.cerminara.yazzy',
			'https://play.google.com/store/apps/details?id=net.excelltech.android.fakeatextfree',
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

	var numberWithCommas = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

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

	  	window.onload = function() {
	  		document.getElementById( 'desktop-msg' ).innerHTML = '<p>If you want to see only apps for iPhone or apps for Android, open this website on your phone.</p>';
	  	}

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

  	count.transaction(function(current_value) {
	    return current_value + 1;
	  });

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
