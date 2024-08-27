const express = require('express');
const app = express();

// Details of Smart Contract and Blockchain

// const contractAbi = import('./abi.json');

const contractAbi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "candidate",
				"type": "address"
			}
		],
		"name": "CandidateApproved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "candidate",
				"type": "address"
			}
		],
		"name": "CandidateRegistered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "electionId",
				"type": "uint256"
			}
		],
		"name": "ElectionCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "electionId",
				"type": "uint256"
			}
		],
		"name": "ElectionResultsPublished",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "orgId",
				"type": "uint256"
			}
		],
		"name": "OrganizationApproved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "orgId",
				"type": "uint256"
			}
		],
		"name": "OrganizationRegistered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "pollId",
				"type": "uint256"
			}
		],
		"name": "PollCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "voter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "pollId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "optionIndex",
				"type": "uint256"
			}
		],
		"name": "PollResponseSubmitted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "voter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "electionId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "candidateId",
				"type": "uint256"
			}
		],
		"name": "VoteCasted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "voter",
				"type": "address"
			}
		],
		"name": "VoterApproved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "voter",
				"type": "address"
			}
		],
		"name": "VoterRegistered",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_admin",
				"type": "address"
			}
		],
		"name": "appointAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "candidateAddress",
				"type": "address"
			}
		],
		"name": "approveCandidate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "orgId",
				"type": "uint256"
			}
		],
		"name": "approveOrganization",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "voterAddress",
				"type": "address"
			}
		],
		"name": "approveVoter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candidateAddresses",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "candidates",
		"outputs": [
			{
				"internalType": "string",
				"name": "partyName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "partySlogan",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "partyImage",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "manifestoHash",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isApproved",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "electionId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "candidateId",
				"type": "uint256"
			}
		],
		"name": "castVote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "electionId",
				"type": "uint256"
			}
		],
		"name": "closeVoting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "electionName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "startTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endTime",
				"type": "uint256"
			}
		],
		"name": "createElection",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "question",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "options",
				"type": "string[]"
			}
		],
		"name": "createPoll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "deployer",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "electionVotes",
		"outputs": [
			{
				"internalType": "address",
				"name": "voterAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "candidateId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "electionId",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "elections",
		"outputs": [
			{
				"internalType": "string",
				"name": "electionName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "startTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endTime",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isActive",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "isResultsPublished",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "electionId",
				"type": "uint256"
			}
		],
		"name": "getAllVotersWhoVoted",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getApprovedCandidates",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "partyName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "partySlogan",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "partyImage",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "manifestoHash",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isApproved",
						"type": "bool"
					}
				],
				"internalType": "struct TrustVote.Candidate[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getApprovedOrganizations",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "registrationNumber",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "location",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "contactNumber",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "electionType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "proofHash",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isApproved",
						"type": "bool"
					}
				],
				"internalType": "struct TrustVote.Organization[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getApprovedVoters",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "mobileNo",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "designation",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "proofHash",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isVerified",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "hasVoted",
						"type": "bool"
					}
				],
				"internalType": "struct TrustVote.Voter[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "electionId",
				"type": "uint256"
			}
		],
		"name": "getCurrentVotingStatus",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "electionId",
				"type": "uint256"
			}
		],
		"name": "getElectionResults",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "voterAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "candidateId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "electionId",
						"type": "uint256"
					}
				],
				"internalType": "struct TrustVote.Vote[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pollId",
				"type": "uint256"
			}
		],
		"name": "getPollResults",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRegisteredCandidates",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "partyName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "partySlogan",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "partyImage",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "manifestoHash",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isApproved",
						"type": "bool"
					}
				],
				"internalType": "struct TrustVote.Candidate[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRegisteredOrganizations",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "registrationNumber",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "location",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "contactNumber",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "electionType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "proofHash",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isApproved",
						"type": "bool"
					}
				],
				"internalType": "struct TrustVote.Organization[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRegisteredVoters",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "mobileNo",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "designation",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "proofHash",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isVerified",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "hasVoted",
						"type": "bool"
					}
				],
				"internalType": "struct TrustVote.Voter[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "electionId",
				"type": "uint256"
			}
		],
		"name": "openVoting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "organizations",
		"outputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "registrationNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "location",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "contactNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "electionType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "proofHash",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isApproved",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "polls",
		"outputs": [
			{
				"internalType": "string",
				"name": "pollQuestion",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "electionId",
				"type": "uint256"
			}
		],
		"name": "publishResults",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_partyName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_partySlogan",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_partyImage",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_manifestoHash",
				"type": "string"
			}
		],
		"name": "registerCandidate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "registrationNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "location",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "contactNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "electionType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "proofHash",
				"type": "string"
			}
		],
		"name": "registerOrganization",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_mobileNo",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_designation",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_proofHash",
				"type": "string"
			}
		],
		"name": "registerVoter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "candidateAddress",
				"type": "address"
			}
		],
		"name": "rejectCandidate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "orgId",
				"type": "uint256"
			}
		],
		"name": "rejectOrganization",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "voterAddress",
				"type": "address"
			}
		],
		"name": "rejectVoter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_admin",
				"type": "address"
			}
		],
		"name": "removeAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "resetContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pollId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "optionIndex",
				"type": "uint256"
			}
		],
		"name": "submitPollResponse",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userRoles",
		"outputs": [
			{
				"internalType": "enum TrustVote.UserRole",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "voterAddresses",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "voters",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "mobileNo",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "designation",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "proofHash",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isVerified",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "hasVoted",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const providerURL = "http://127.0.0.1:8545/";

const PublicKey = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";

const {Web3} = require('web3');
const web3 = new Web3(providerURL);

const contract = new web3.eth.Contract(contractAbi, contractAddress);

app.use(express.json());

app.get("/getRegisteredOrganizations", async (req, res) => {

	const result = await contract.methods.getRegisteredOrganizations().call();
	res.json({result});
})

app.post("/registerOrganization", async (req, res) => {

	const accounts = await web3.eth.getAccounts();
	console.log(accounts[2]);
	// const {name, registrationNumber, location, contactNumber, electionType, proofHash} = req.body;
	
	const result1 = await contract.methods.registerOrganization("My Organization", "12345", "Pune India", "1234567890", "Testing", "QmT7pGSMdWgLn6Mh7Z4AyrYZsvB3zZ7ZtUjqJ6P3uAfqGq").send({from: accounts[2]});

	// const result = await contract.methods.registerOrganization(name, registrationNumber, location, contactNumber, electionType, proofHash).send({from: accounts[2]});

	// res.json({message : "Data send succesfully"});

	console.log(result1);
})

// app.post('/registerOrganization', async(req, res) => {

// 	const status = await contract.methods.registerOrganization("My Organization", "12345", "Pune India", "1234567890", "Testing", "QmT7pGSMdWgLn6Mh7Z4AyrYZsvB3zZ7ZtUjqJ6P3uAfqGq").send({
// 		from: PublicKey
// 	})

// })

// app.get('/registerOrganization', async(req, res) => {

// 	const status = await contract.methods.registerOrganization("My Organization", "12345", "Pune India", "1234567890", "Testing", "QmT7pGSMdWgLn6Mh7Z4AyrYZsvB3zZ7ZtUjqJ6P3uAfqGq").send({
// 		from: PublicKey
// 	})

// 	const result = await contract.methods.getRegisteredOrganizations().call();
//    	console.log(result);


// })

// async function getRegisteredVotersFromC() {
    
//     const result = await contract.methods.getRegisteredVoters().call();
//    console.log(result);

// }

// console.log(`Contract Address: ${contract.options.address}`);   //This will confirm if the contract instance is properly initialized.

async function getRegisteredOrganizationsFromC() {

	// try {
	// 	const result = await contract.methods.getRegisteredOrganizations().call();
    // 	console.log("Number of Registered Organization : ", result.length);

	// 	if (result.length === 0) {
	// 		console.log("No Organization Found.");
	// 	} else {
	// 		result.forEach(voter => {
	// 			console.log(`Organization Owner : ${organizations.owner}`);
	// 			console.log(`Organization Name: ${organizations.name}`);
    //             console.log(`Registration Number: ${organizations.registrationNumber}`);
    //             console.log(`Location: ${organizations.location}`);
    //             console.log(`Contact Number: ${organizations.contactNumber}`);
    //             console.log(`Election Type: ${organizations.electionType}`);
    //             console.log(`Proof Hash: ${organizations.proofHash}`);
    //             console.log(`Is Approved: ${organizations.isApproved}`);
	// 		})
	// 	}
	// } catch (error) {
	// 	console.log("Error fetching organizations:", error);
	// }

	const result = await contract.methods.getRegisteredOrganizations().call();
	console.log(result);	
}

// getRegisteredOrganizationsFromC();

async function getApprovedOrganizationsFromC() {

	// const accounts = await web3.eth.getAccounts();
    // console.log(await web3.eth.getBalance(accounts[0]));


	console.log(result);
	try {
		const result = await contract.methods.getApprovedOrganizations().call();
    	console.log("Number of Approved Organization : ", result.length);

		if (result.length === 0) {
			console.log("No Organization Found.");
		} else {
			result.forEach(voter => {
				console.log(`Organization Owner : ${organization.owner}`);
				console.log(`Organization Name: ${organization.name}`);
                console.log(`Registration Number: ${organization.registrationNumber}`);
                console.log(`Location: ${organization.location}`);
                console.log(`Contact Number: ${organization.contactNumber}`);
                console.log(`Election Type: ${organization.electionType}`);
                console.log(`Proof Hash: ${organization.proofHash}`);
                console.log(`Is Approved: ${organization.isApproved}`);
			})
		}
	} catch (error) {
		console.log("Error fetching organizations:", error);
	}
    
}

// getApprovedOrganizationsFromC();



async function getRegisteredVotersFromC() {
    try {
        const result = await contract.methods.getRegisteredVoters().call();
        console.log("Number of registered voters:", result.length);
        
        if (result.length === 0) {
            console.log("No voters found.");
        } else {
            result.forEach(voter => {
                console.log(`Name: ${voter.name}`);
                console.log(`Email: ${voter.email}`);
                console.log(`Mobile No: ${voter.mobileNo}`);
                console.log(`Designation: ${voter.designation}`);
                console.log(`Proof Hash: ${voter.proofHash}`);
                console.log(`Is Verified: ${voter.isVerified}`);
                console.log(`Has Voted: ${voter.hasVoted}`);
            });
        }
    } catch (error) {
        console.error("Error fetching voters:", error);
    }
}

// getRegisteredVotersFromC();

async function getApprovedVotersFromC() {
    try {
        const result = await contract.methods.getApprovedVoters().call();
        console.log("Number of Approved voters:", result.length);
        
        if (result.length === 0) {
            console.log("No voters found.");
        } else {
            result.forEach(voter => {
                console.log(`Name: ${voter.name}`);
                console.log(`Email: ${voter.email}`);
                console.log(`Mobile No: ${voter.mobileNo}`);
                console.log(`Designation: ${voter.designation}`);
                console.log(`Proof Hash: ${voter.proofHash}`);
                console.log(`Is Verified: ${voter.isVerified}`);
                console.log(`Has Voted: ${voter.hasVoted}`);
            });
        }
    } catch (error) {
        console.error("Error fetching voters:", error);
    }
}

// getApprovedVotersFromC();

async function getRegisteredCandidatesFromC() {
    try {
        const result = await contract.methods.getRegisteredCandidates().call();
        console.log("Number of Registered Candidate:", result.length);
        
        if (result.length === 0) {
            console.log("No Candidate found.");
        } else {
            result.forEach(candidate => {
                console.log(`Party Name: ${candidate.partyName}`);
                console.log(`Party Slogan: ${candidate.partySlogan}`);
                console.log(`Party Image: ${candidate.partyImage}`);
                console.log(`Manifesto hash: ${candidate.manifestoHash}`);
                console.log(`isApproved: ${candidate.isApproved}`);
            });
        }
    } catch (error) {
        console.error("Error fetching candidate:", error);
    }
}

// getRegisteredCandidatesFromC();

async function getApprovedCandidatesFromC() {
    try {
        const result = await contract.methods.getApprovedCandidates().call();
        console.log("Number of Approved Candidate:", result.length);
        
        if (result.length === 0) {
            console.log("No Candidate found.");
        } else {
            result.forEach(candidate => {
                console.log(`Party Name: ${candidate.partyName}`);
                console.log(`Party Slogan: ${candidate.partySlogan}`);
                console.log(`Party Image: ${candidate.partyImage}`);
                console.log(`Manifesto hash: ${candidate.manifestoHash}`);
                console.log(`isApproved: ${candidate.isApproved}`);
            });
        }
    } catch (error) {
        console.error("Error fetching candidate:", error);
    }
}

// getApprovedCandidatesFromC();



// app.get('/', (req, res) => {
//     res.send("Hey Welcome to my page");
// })


// app.get('/', (req, res) => {
//     const result = getRegisteredOrganizationsFromC();
//     res.send(result);
// })

app.listen(8545, (req, res) => {
    console.log("Server is running at http://127.0.0.1:8545");
})
