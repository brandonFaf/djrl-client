# DJRL

DJRL is a platform that DJs can use to allow their guests to request songs, see all the requests, and upvotes the ones they are most interested in. DJRL consists of two parts: DJRL-client and DJRL-admin. The client project allows uses to request songs quickly (without any authentication) so that they can get back to partying. The Admin project allows DJs to see what has been requested, how many upvotes it has, and mark a song as played so that the clients can't request it anymore.

## Technology involved

Both the DJRL-client and DJRL-admin use React as the frontend and firebase firestore for the database. The song data is pulled from Last.fm using their track API.
