# Challanges
1. While deploying crons job was not letting it build
2. Puppeteer was not working after deployment (Something related to opening headless version of browser)
3. Changing routes on react was reseting "useContext" states as it was refreshing the websites
    - To solve this "react-router-dom's" navigate function was used 
4. Arrow function and normal functions are different
    - Arrow function do not have their own object so we cannot use `this` keyword in arrow function
    - This caused error while creating refresh token 
5. Not found on refresh

# Remeber
- Change all the REST calls from client to depolyed server from local host
- Change the cors policy add the url of client while hosting

# TODO
- Web socket for razorpay
- Add payment button on bills sent 
