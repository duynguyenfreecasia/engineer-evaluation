'use strict';

const uuid = require("uuid");
const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();
AWS.config.setPromisesDependency(require("bluebird"));

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
      if(result.Items?.length > 0) {
        data = {
          Item:  result.Items[0]
        };
      }
      const response = {
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
  const item_1 = requestBody.item_1;
  const item_2 = requestBody.item_2;
  const item_3 = requestBody.item_3;

  const dataInfo = {
    TableName: process.env.DEMO_TABLE,
    Item: {
      id: uuid.v1(),
      item_1: item_1,
      item_2: item_2,
      item_3: item_3
    },
  };

  return dynamoDb.put(dataInfo).promise()
    .then((res) => {
      callback(null, {
        statusCode: 200,
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
  const item_1 = requestBody.item_1;
  const item_2 = requestBody.item_2;
  const item_3 = requestBody.item_3;
  const { id } = event.pathParameters

  const dataInfo = {
    TableName: process.env.DEMO_TABLE,
    Key: { id },
    UpdateExpression : "SET #item_1 = :item_1, #item_2 = :item_2, #item_3 = :item_3",
    ExpressionAttributeValues: {
      ":item_1" : item_1,
      ":item_2" : item_2,
      ":item_3" : item_3
    },

    ExpressionAttributeNames: {
      "#item_1": "item_1",
      "#item_2" : "item_2",
      "#item_3": "item_3"
    },
    
    ReturnValues: "UPDATED_NEW"
  };
  return dynamoDb.update(dataInfo).promise()
    .then((res) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          message: `Update Successfully`
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