const Company = require('../models/company.model');

const { ReS } = require('../services/util.js');

const create = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, company;
    //let user = req.user;

    let company_info = req.body;
    //company_info.users = [{user:user._id}];

    const response = await Company.create(company_info);
    //[err, company] = await to(Company.create(company_info));
    //if(err) return ReE(res, err, 422);

    //return ReS(res,{company:company.toWeb()}, 201);
}
module.exports.create = create;

const getAll = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    //let user = req.user;
    let err, companies;
    //[err, companies] = await to(user.Companies());
    const companies = await(user.Compaies())

    let companies_json = []
    for (let i in companies){
        let company = companies[i];
        companies_json.push(company.toWeb())
    }
    console.log('before call');
    res.json({companies_json})
    //return ReS(res, {companies: companies_json});
}
module.exports.getAll = getAll;