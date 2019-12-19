var expect = require('chai').expect;
var saveDalMW = require('../../../../middleware/dal/saveDalMW');

describe('saveDalMW middleware', function() {
    it('should set res.locals.dal with a dal object from db', function(done) {
        const mw = saveDalMW({
            DalModel: 'tralala'
        });

        mw({
            body: {
                cim: 'asd',
                album: 'dsa',
                kiadasev: '1995'
            },
            params: {
                dalid: '8'
            }
        },
        {
            locals: {
                eloado: {
                    _id: 'eloadoid'
                },
                dal: {
                    save: (cb) => {
                        cb(null);
                    }
                }
            },
            redirect: where => {
                expect(where).to.be.eql('/dal/eloadoid');
                done();
            }
        },
        (err) => {}
        );
    });
    it('should call next with error if there is a db error', function(done) {
        const mw = saveDalMW({
            DalModel: 'tralala'
        });

        mw({
            body: {
                cim: 'asd',
                album: 'dsa',
                kiadasev: '1995'
            },
            params: {
                dalid: '13'
            }
        },
        {
            locals: {
                eloado: {
                    _id: 'eloadoid'
                },
                dal: {
                    save: (cb) => {
                        cb('db error');
                    }
                }
            },
            redirect: where => {}
        },
        (err) => {
            expect(err).to.be.eql('db error');
            done();
        }
        );
    });
    it('should set res.locals.dal with a dal object created by the MW', function(done) {
        class DalMockModel {
            save(cb) {
                cb(null);
            }
        }
        
        const mw = saveDalMW({
            DalModel: DalMockModel
        });

        mw({
            body: {
                cim: 'asd',
                album: 'dsa',
                kiadasev: '1995'
            },
            params: {
                dalid: '13'
            }
        },
        {
            locals: {
                eloado: {
                    _id: 'eloadoid'
                }
            },
            redirect: where => {
                expect(where).to.be.eql('/dal/eloadoid');
                done();
            }
        },
        (err) => {}
        );
    });
});