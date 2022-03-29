# Build CRUD Evaluation
### 1.Repare

1. Install Serverless:  
      `npm install -g serverless`
2. Create Account Serverless (Optional)
      * Register at [link](https://app.serverless.com/). (Or request Project Manager).
      * Create Node HTTP API app on your Dashboard ( Or can request Project Manager) .
3. Create Access Key and secret key of AWS
      * Get Info follow at [link](https://www.serverless.com/framework/docs/providers/aws/guide/credentials).
      * <p>Setup with serverless config credentials command.</p>
      ###
         serverless config credentials \
         --provider aws \
         --key Access_key_ID \
         --secret Secret_access_key -o
### 2 Config Environment:
   * Make copy **serverless.example.yml** on  engineer-evaluation/back-end/demo-service folder to **serverless.yml**.
   * On serverless.yml file: 
      + Change "org" => your org 
      + Change "app" => The app name  which created
      + Change "service" => your service name (exp: engeva-api)
      + Change "region" => your region (exp: us-west-2)
###3. Deploy
   * Deploy on AWS:
      + `npm run dev`
      ![](https://i2.paste.pics/f4f09b2793f864bff950af8e8c14c205.png "Server")
   * Deploy on Local:   
      + `npm run local`
      ![](https://i2.paste.pics/61726f7c09f52b45235db109d9a24ac5.png "Local")
### 4. Done

### 5. List API After Deploy
   
   ``` 
   API_GATEWAY = https://akvocmd16m.execute-api.us-west-2.amazonaws.com
   eva_register_id ="e7a82227-dde2-41e2-8f40-16904f4062aa-example" 
   ```
   
   +  Get List
   ```
    URL: {{API_GATEWAY}}engeva/api/getlist
    METHOD: GET
   ```
   + Create

   ```
    URL: {API_GATEWAY}engeva/api/insert    
    METHOD: POST  
```
   
   params:
  ```json
   {
       "technicalStrength": "good",
       "workAttitude": "good",
       "technical": ["php","java"]
   }
```
   + View       
   ```
   URL: {{API_GATEWAY}engeva/api/get/{eva_register_id}  
   METHOD: GET
```
   + Update  
   ```
    URL: {{API_GATEWAY}engeva/api/update/{eva_register_id}  
    METHOD: PUT
```
   
params:
```json
    {
       "technicalStrength": "good",
       "workAttitude": "good",
       "technical": ["php","java"]
   }
   ```
   + Delete:
   ```
URL: {{API_GATEWAY}engeva/api/delete/{eva_register_id}
METHOD: DELETE
```