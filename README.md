## What is it?

This is an implementation of virtual signature with RSA keys. <br>
Virtual signature is a method for verifying if an determinating data is really
made by the user that it was made by the correct person.<br>

### How it works

That is possible using a pair of RSA keys, one public and one private. Basically, the person 1, Bob, want to send a message to a second person, Alice, on a secure way, because its the bank password.

Bob then encrypt the password with the public RSA Key and to make sure that the message will not be modificated, sign the message with the private RSA Key.

Alice, when receive the message, to verify if really is from Bob uses Bob's public key, the data and the signature (sended with the message) and if the data was modificated or not asigned with Bob's key it will be detected.

## How to run

To run this application Node must be installed. Just enter on the project folder via terminal and type the following comand:

```sh
yarn
```

```sh
npm install
```

And then:

```sh
npm run dev
```

or

```sh
yarn dev
```

You can also run the following commands to transpile the code to JavaScript version, that will be generated at the `/dist` folder in the projet root.

```sh
npm run build
```

or

```sh
yarn build
```

## API Routes

### <strong>/generation</strong>

<strong>METHOD</strong>: `POST`<br>
<strong>BODY</strong>: `NONE`<br>
<strong>RESPONSE</strong>: `JSON`

```json
{
	"privateKey": "-----BEGIN RSA PRIVATE KEY-----\n ... \n-----END RSA PUBLIC KEY-----",
    "publicKey": "-----BEGIN RSA PUBLIC KEY-----\n ... \n-----END RSA PUBLIC KEY-----"
}
```

### <strong>/encrypt</strong>

<strong>METHOD</strong>: `POST`<br>
<strong>BODY</strong>: `JSON`

Example: 

```json
{
	"key": "-----BEGIN RSA PUBLIC KEY-----\n ... \n-----END RSA PUBLIC KEY-----",
	"typeKey": "public",
    "plainText": "Hello there everyone!"
}
```

<strong>RESPONSE</strong>: `JSON`<br>

```json
{
  "cypherText": "cypher text in base64"
}
```

### <strong>/decrypt</strong>

<strong>METHOD</strong>: `POST`<br>
<strong>BODY</strong>: `JSON`

Example: 

```json
{
	"privateKey": "-----BEGIN RSA PUBLIC KEY-----\n ... \n-----END RSA PUBLIC KEY-----",
	"cypherText": "cypher text in base64"
}
```

<strong>RESPONSE</strong>: `JSON`<br>

```json
{
  "plainText": "decoded cypher in plain text"
}
```

### <strong>/sign</strong>

<strong>METHOD</strong>: `POST`<br>
<strong>BODY</strong>: `JSON`

Example: 

```json
{
	"privateKey": "-----BEGIN RSA PUBLIC KEY-----\n ... \n-----END RSA PUBLIC KEY-----",
	"data": "cypher text in base64"
}
```

<strong>RESPONSE</strong>: `JSON`<br>

```json
{
  "signature": "signature hash"
}
```

### <strong>/verify</strong>

<strong>METHOD</strong>: `POST`<br>
<strong>BODY</strong>: `JSON`

Example: 

```json
{
	"publicKey": "-----BEGIN RSA PUBLIC KEY-----\n ... \n-----END RSA PUBLIC KEY-----",
    "signature": "signature hash",
    "data": "encrypted data"
}
```

<strong>RESPONSE</strong>: `HTTP CODE`

The API return only a simple HTTP Code as response.

- `200` if is OK
- `400` if is not.


## Why?

This is just a simple example for learning purpose and a college work for System Security subject. Feel free to use.
