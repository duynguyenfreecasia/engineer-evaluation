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
      ":id": event.queryStringParameters.id
    }
  };

  return dynamoDb
    .query(params)
    .promise()
    .then((result) => {
      const response = {
        statusCode: 200,
        body: JSON.stringify(result),
      };
      callback(null, response);
    })
    .catch((error) => {
      callback(null, error);
    });
};

module.exports.insertRecord = async (event, context, callback) => {
  const requestBody = JSON.parse(event.body);
  const age = requestBody.age;
  const name = requestBody.name;

  const dataInfo = {
    TableName: process.env.DEMO_TABLE,
    Item: {
      id: uuid.v1(),
      name: name,
      age: age
    },
  };

  return dynamoDb.put(dataInfo).promise()
    .then((res) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          message: `Successfully ${event.body}`,
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
  const age = requestBody.age;
  const name = requestBody.name;
  const { id } = event.queryStringParameters

  const dataInfo = {
    TableName: process.env.DEMO_TABLE,
    Key: { id },
    UpdateExpression : "SET #name = :name, #age = :age",
    ExpressionAttributeValues: {
      ":name" : name,
      ":age" : age
    },

    ExpressionAttributeNames: {
      "#name": "name",
      "#age" : "age"
    },
    
    ReturnValues: "UPDATED_NEW"
  };
  return dynamoDb.update(dataInfo).promise()
    .then((res) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          message: `Successfully ${event.body}`,
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
  const { id } = event.queryStringParameters

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
          message: `Delete successfully id is: ${id}`,
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