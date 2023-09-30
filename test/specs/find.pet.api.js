const chai = require('chai');
const { beforeEach } = require('node:test');
const axiosCall = require('../command/api.call.axios');
const { addPet } = require('../data/data');
const { findPetSchema } = require('../jsonSchema/findPet.schema');

chai.use(require('chai-json-schema'));

describe('API Test Find Pet by Status', () => {
    beforeEach(async () => {
        this.status = 'pending';
        this.randString = Math.random().toString(36).substring(2,7);
        this.res = await axiosCall.post({
            path : 'pet',
            data: {
                ...addPet,
                name: `animal ${this.randString}`,
                status : this.status
            }
        });
    });

    it('should get correct response find pet', async () => {
        const res = await axiosCall.get({
            path : `pet/findByStatus?status=${this.status}`
        });

        const isAllStatus = res.data.every(item => item.status === this.status);
        chai.expect(res.status).to.equal(200);
        chai.expect(res.data).jsonSchema(findPetSchema);
        chai.expect(isAllStatus).to.equal(true);
        // jika api menyimpan data
        // const filterPet = res.data.find((item) => item.name == `animal ${this.randString}`);
        // chai.expect(filterPet).not.to.be.undefined;
    });
});
