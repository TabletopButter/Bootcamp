You will need OAuth 2.0 to make calls to retrive a persons information as we need permission to retrieve member(user) information. We would most likely store the Authorization token in the DB as well

Sameple request: 

GET https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id={your_client_id}&redirect_uri=https%3A%2F%2Fdev.example.com%2Fauth%2Flinkedin%2Fcallback&state=fooobar&scope=r_liteprofile%20r_emailaddress%20w_member_social

Client ID is included in the application credentials
https://www.linkedin.com/developers/apps/87712654/auth

Need to include a redirect route that is also defined in the linked in application credentials that sends the information back to the app

https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow?context=linkedin/context <- most of the steps are outlined in this link 

Once you have permission to access the profile you can then make the calls to request the information from the API

Here is the way to retrive a current member's  basic profile

https://docs.microsoft.com/en-us/linkedin/shared/integrations/people/profile-api - it requires to have one of the 2 permissions r_liteprofile or r_basicprofile 

basicprofile would get name, photo, headline

GET https://api.linkedin.com/v2/me 

If we want the full profile we need the r_fullprofile member permission
https://docs.microsoft.com/en-us/linkedin/shared/references/v2/profile/full-profile?context=linkedin/consumer/context

I believe you can just change the scope in the authorazation request to r_full profile. A few examples I found state that you can request both the basic & full at teh same time

https://gist.github.com/daviddefco/4557352

This should let us access most of the information we need, like name, address(geo location), phone number, id(unique identifier), positions(employment history), skills etc

