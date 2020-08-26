## What is it?

This is an implementation of virtual signature with RSA keys. <br>
Virtual signature is a method for verifying and validating the identity of the author of pieces of data on a system.<br>

### How it works

That is possible using a pair of RSA keys, one public and one private. Basically, the person 1, Bob, wants to send a message to a second person, Alice, in a secure way, a password for example.

Bob then signs the message with his private RSA Key, generating a signature on the message.

When Alice receives the message, to verify if it really is from Bob, she uses the public RSA key (pair of Bob's) on the signed data. If the data was modificated or not signed with Bob's key it will be detected.

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
    "data": "message to verify"
}
```

<strong>RESPONSE</strong>: `HTTP CODE`

The API return only a simple HTTP Code as response.

- `200` if is OK
- `400` if is not.


## Why?

This is just a simple example for learning purpose and a college work for System Security subject. Feel free to use.
