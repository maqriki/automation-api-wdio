const { expect } = require('chai');
const axiosCall = require('../command/api.call.axios');
const { addPet } = require('../data/data');

describe('API Test Add Pet', () => {
    it('should get correct response', async () => {
        const res = await axiosCall.post({
            path : 'pet',
            data : addPet
        });

        expect(res.status).to.equal(200);
    });

    it('should get incorrect response', async () => {
        const res = await axiosCall.post({
            path : 'pet',
            data : { ...addPet, id : 'this is string' }
        });

        expect(res.status).to.equal(500);
        expect(res.data.message).to.equal('something bad happened');
    });
});
