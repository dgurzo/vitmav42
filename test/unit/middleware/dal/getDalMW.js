var expect = require('chai').expect;
var getDalMW = require('../../../../middleware/dal/getDalMW');

describe('getDalMW middleware', function() {
    it('should set res.locals.dal with a dal object from db', function(done) {
        const mw = getDalMW({
            DalModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({_id: '8'});
                    cb(null, 'mockdal');
                }
            }
        });

        const resMock = {
            locals: {}
        };

        mw({
            params: {
                dalid: '8'
            }
        },
        resMock,
        (err) => {
            expect(err).to.be.eql(undefined);
            expect(resMock.locals).to.be.eql({dal: 'mockdal'});
            done();
        });
    });
    it('should call next with error when there is a db problem', function(done) {
        const mw = getDalMW({
            DalModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({_id: '8'});
                    cb('db error', null);
                }
            }
        });

        const resMock = {
            locals: {}
        };

        mw({
            params: {
                dalid: '8'
            }
        },
        resMock,
        (err) => {
            expect(err).to.be.eql('db error');
            done();
        });
    });
    it('should call next when no dal found in the db', function(done) {
        const mw = getDalMW({
            DalModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({_id: '8'});
                    cb(undefined, null);
                }
            }
        });

        const resMock = {
            locals: {}
        };

        mw({
            params: {
                dalid: '8'
            }
        },
        resMock,
        (err) => {
            expect(err).to.be.eql(undefined);
            expect(resMock.locals).to.be.eql({});
            done();
        });
    });
});