/*
------Question 40 :----------
Album: Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title, and it should return a Object containing
these two pieces of information. Use the function to make three dictionaries representing different albums.
Print each return value to show that Objects are storing the album information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
If the calling line includes a value for the number of tracks, add that value to the album’s Object.
Make at least one new function call that includes the number of tracks on an album.
*/
//1st function
function music_album(artist_name, album_title) {
    let profile = {
        Artist: artist_name,
        Album: album_title,
    };
    console.log(profile);
}
music_album("Rizwan", "Sizzling");
music_album("Rehan", "To The Moon");
music_album("Sobann", "Dizzling");
//2nd function
function make_album(artist_name, album_title, number_of_tracks) {
    let profile = {
        Artist: artist_name,
        Album: album_title,
        Tracks: number_of_tracks
    };
    console.log(profile);
}
make_album("Rizwan", "Sizzling");
make_album("Rizwan", "Sizzling", 10);
export {};
