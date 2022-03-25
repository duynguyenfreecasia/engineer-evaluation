# Build CRUD Evaluation
1. Required
   1. Install Serverless
      - npm install -g serverless
   2. Create Account Serverless
      1. Register at link https://app.serverless.com/. (Or request Project Manager)
      2. Create Node HTTP API app on your Dashboard ( Or can request Project Manager) 
   3. Create Access Key and secret key of AWS
      1. Get Info follow at link: https://www.serverless.com/framework/docs/providers/aws/guide/credentials
      2. Setup with serverless config credentials command
         - serverless config credentials \
         --provider aws \
         --key AKIAIOSFODNN7EXAMPLE \
         --secret wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
2. Config Source:
   1. Make copy **serverless.example.yml** on  engineer-evaluation/back-end/demo-service folder to **serverless.yml**
   2. On serverless.yml file: 
      1. Change "org" => your org 
      2. Change "app" => The app name  which created
3. Deploy
   1. Deploy to AWS: **sls deploy** (or serverless deploy) <br /> 
   2. Deploy on Local: **sls offline**
4. Done
5. List API after deploy
   
   API_GATEWAY = https://akvocmd16m.execute-api.us-west-2.amazonaws.com <br />
   eva_register_id ="e7a82227-dde2-41e2-8f40-16904f4062aa-example"<br />
   
   1. Get List<br />
   METHOD: GET <br />
   {{API_GATEWAY}}engeva/api/getlist <br />
   
   2. Create<br />
   METHOD : POST<br />
   {API_GATEWAY}engeva/api/insert<br />
   params:<br />
   {<br />
   "technicalStrength": "good",<br />
   "workAttitude": "good",<br />
   "technical": ["php","java"]<br />
   }<br />
   
   3. View<br />
   METHOD: GET<br />
   {{API_GATEWAY}engeva/api/get/{eva_register_id}<br />
   
   4. Update<br />
   METHOD: PUT<br />
   {{API_GATEWAY}engeva/api/update/{eva_register_id}<br />
   params:<br />
   {<br />
   "technicalStrength": "good",<br />
   "workAttitude": "good",<br />
   "technical": ["php","java"]<br />
   }<br />
   
   5. Delete:<br />
   METHOD: DELETE<br />
   {{API_GATEWAY}engeva/api/delete/{eva_register_id}<br />
