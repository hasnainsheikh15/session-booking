import dns from "dns";

dns.resolveSrv(
    "_mongodb._tcp.piggybank.veo17es.mongodb.net",
    (err, addresses) => {
        console.log(err);
        console.log(addresses);
    }
);