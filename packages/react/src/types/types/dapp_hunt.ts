export type DappHunt = {
  "version": "0.1.0",
  "name": "dapp_hunt",
  "instructions": [
    {
      "name": "createProduct",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "hunterSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "product",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "makerTwitter",
          "type": "string"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "logoUrl",
          "type": "string"
        },
        {
          "name": "websiteUrl",
          "type": "string"
        },
        {
          "name": "twitterUrl",
          "type": "string"
        }
      ]
    },
    {
      "name": "upvoteProduct",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "voterSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "product",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "upvoteAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "product",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "hunter",
            "type": "publicKey"
          },
          {
            "name": "makerTwitter",
            "type": "string"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "logoUrl",
            "type": "string"
          },
          {
            "name": "websiteUrl",
            "type": "string"
          },
          {
            "name": "twitterUrl",
            "type": "string"
          },
          {
            "name": "upvotes",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "upvoteAaccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "product",
            "type": "publicKey"
          },
          {
            "name": "voter",
            "type": "publicKey"
          }
        ]
      }
    }
  ]
};

export const IDL: DappHunt = {
  "version": "0.1.0",
  "name": "dapp_hunt",
  "instructions": [
    {
      "name": "createProduct",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "hunterSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "product",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "makerTwitter",
          "type": "string"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "logoUrl",
          "type": "string"
        },
        {
          "name": "websiteUrl",
          "type": "string"
        },
        {
          "name": "twitterUrl",
          "type": "string"
        }
      ]
    },
    {
      "name": "upvoteProduct",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "voterSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "product",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "upvoteAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "product",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "hunter",
            "type": "publicKey"
          },
          {
            "name": "makerTwitter",
            "type": "string"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "logoUrl",
            "type": "string"
          },
          {
            "name": "websiteUrl",
            "type": "string"
          },
          {
            "name": "twitterUrl",
            "type": "string"
          },
          {
            "name": "upvotes",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "upvoteAaccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "product",
            "type": "publicKey"
          },
          {
            "name": "voter",
            "type": "publicKey"
          }
        ]
      }
    }
  ]
};
