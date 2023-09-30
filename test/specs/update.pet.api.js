const chai = require('chai');
const { beforeEach } = require('node:test');
const axiosCall = require('../command/api.call.axios');
const { addPet } = require('../data/data');

describe('API Test Update Pet', () => {
    beforeEach(async () => {
        this.res = await axiosCall.post({
            path : 'pet',
            data: addPet
        });
        
        this.id = this.res.data.id;
    });

    it('should get correct response update pet', async () => {
        this.id = 0; // cause this api use static id
        this.randString = Math.random().toString(36).substring(2, 7);
        const res = await axiosCall.put({
            path : 'pet',
            data: {
                ...addPet,
                id : this.id,
                name: `animal ${this.randString}`
            }
        });
        chai.expect(res.status).to.equal(200);
        chai.expect(res.data.name).to.equal(`animal ${this.randString}`);
    });
});
