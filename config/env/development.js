'use strict';

module.exports = {
	db: 'mongodb://localhost/mean-dev',
	app: {
		title: 'MEAN - Development Environment'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || '1452138325081885',
		clientSecret: process.env.FACEBOOK_SECRET || '976630cdb93ceac669c1d3a0790ebbee',
		callbackURL: '/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'f9ozOQ8CInXjeX3r7ejL3gMhD',
		clientSecret: process.env.TWITTER_SECRET || 'WLORViJEzOBBYB6sXxuusMfWPxhN5fvIlV9JsB5VrtmYz0YUQT',
		callbackURL: '/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || '643417052881-nnmu2i8beone790ed607ri7rcbfanhf7@developer.gserviceaccount.com',
		clientSecret: process.env.GOOGLE_SECRET || '9f02b2fbb0919bbcae131c2a262882e78f5dd331',
		callbackURL: '/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || '77c7a59phojbys',
		clientSecret: process.env.LINKEDIN_SECRET || 'J3BsOiWMX49t0lW7',
		callbackURL: '/auth/linkedin/callback'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'MAILER_FROM',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
				pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
			}
		}
	}
};
