const express = require('express');
const app = express();

// Details of Smart Contract and Blockchain

const contractABI = require('./MyContract.json');

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const providerURL = "http://127.0.0.1:8545/";

const PublicKey = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";

const {Web3} = require('web3');
const web3 = new Web3(providerURL);

const contract = new web3.eth.Contract(contractABI, contractAddress);

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

	try {
		const result = await contract.methods.getRegisteredOrganizations().call();
    	console.log("Number of Registered Organization : ", result.length);

		if (result.length === 0) {
			console.log("No Organization Found.");
		} else {
			result.forEach(organization => {
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

	// const result = await contract.methods.getRegisteredOrganizations().call();
	// console.log(result);	
}

// getRegisteredOrganizationsFromC();

async function getApprovedOrganizationsFromC() {

	// const accounts = await web3.eth.getAccounts();
    // console.log(await web3.eth.getBalance(accounts[1]));
	// console.log(accounts[2]);
	// console.log(await web3.eth.getBalance(accounts[2]));

	try {
		const result = await contract.methods.getApprovedOrganizations().call();
    	console.log("Number of Approved Organization : ", result.length);

		if (result.length === 0) {
			console.log("No Organization Found.");
		} else {
			result.forEach(organization => {
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
