'use strict';

const uuid = require("uuid");
const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();
AWS.config.setPromisesDependency(require("bluebird"));
const resHeader  = {
  "Accept": "*/*",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "X-Requested-With",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "PUT, GET, POST, DELETE, OPTIONS"
}

module.exports.getList = async (event) => {
  return dynamoDb.scan({ TableName: process.env.DEMO_TABLE })
    .promise()
    .then(response => response.Items)
};

module.exports.getData = async (event, context, callback) => {
  const params = {
    TableName: process.env.DEMO_TABLE,
    KeyConditionExpression: "#id = :id",
    ExpressionAttributeNames: {
      "#id": "id"
    },
    ExpressionAttributeValues: {
      ":id": event.pathParameters.id
    }
  };

  return dynamoDb
    .query(params)
    .promise()
    .then((result) => {
      let data = {};
      if(result.Items.length > 0) {
        data = {
          Item:  result.Items[0]
        };
      }
      const response = {
        headers: resHeader,
        statusCode: 200,
        body: JSON.stringify({
          data: data
        }),
      };
      callback(null, response);
    })
    .catch((error) => {
      callback(null, error);
    });
};

module.exports.insertRecord = async (event, context, callback) => {
  const requestBody = JSON.parse(event.body);
  const technicalStrength = requestBody.technicalStrength;
  const workAttitude = requestBody.workAttitude;
  const technical = requestBody.technical;

  const dataInfo = {
    TableName: process.env.DEMO_TABLE,
    Item: {
      id: uuid.v1(),
      technicalStrength: technicalStrength,
      workAttitude: workAttitude,
      technical: technical
    },
  };

  return dynamoDb.put(dataInfo).promise()
    .then((res) => {
      callback(null, {
        isBase64Encoded: false, // Set to `true` for binary support.
        statusCode: 200,
        headers: resHeader,
        body: JSON.stringify({
          message: `Successfully`,
          data: dataInfo.Item
        }),
      });
    })
    .catch((err) => {
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          message: `Error ${err}`,
        }),
      });
    });
};

module.exports.updateRecord = async (event, context, callback) => {
  const requestBody = JSON.parse(event.body);
  const technicalStrength = requestBody.technicalStrength;
  const workAttitude = requestBody.workAttitude;
  const technical = requestBody.technical;
  const { id } = event.pathParameters

  const dataInfo = {
    TableName: process.env.DEMO_TABLE,
    Key: { id },
    UpdateExpression : "SET #technicalStrength = :technicalStrength, #workAttitude = :workAttitude, #technical = :technical",
    ExpressionAttributeValues: {
      ":technicalStrength" : technicalStrength,
      ":workAttitude" : workAttitude,
      ":technical" : technical
    },

    ExpressionAttributeNames: {
      "#technicalStrength": "technicalStrength",
      "#workAttitude" : "workAttitude",
      "#technical": "technical"
    },
    
    ReturnValues: "UPDATED_NEW"
  };
  return dynamoDb.update(dataInfo).promise()
    .then((res) => {
      callback(null, {
        headers: resHeader,
        statusCode: 200,
        body: JSON.stringify({
          message: `Update Successfully`
        }),
      });
    })
    .catch((err) => {
      callback(null, {
        headers: resHeader,
        statusCode: 500,
        body: JSON.stringify({
          message: `Error ${err}`,
        }),
      });
    });
};


module.exports.deleteRecord = async (event, context, callback) => {
  const { id } = event.pathParameters

  const dataInfo = {
    TableName: process.env.DEMO_TABLE,
    Key: { id },
    ConditionExpression:"#id = :id",
    ExpressionAttributeValues: {
      ":id" : id
    },
    ExpressionAttributeNames: {
      "#id": "id"
    },
  };
  return dynamoDb.delete(dataInfo).promise()
    .then((res) => {
      callback(null, {
        statusCode: 200,
        headers: resHeader,
        body: JSON.stringify({
          message: `Delete successfully`,
        }),
      });
    })
    .catch((err) => {
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          message: `Error ${err}`,
        }),
      });
    });
};