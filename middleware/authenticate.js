import jwt from "jsonwebtoken";
const authenticate =async (req, res, next) => {
    console.log('tesssssssssssssssssssssssssss');
    const btoken = req.headers['authorization'];
    //console.log("token",token);
    //const nonSecurePaths = ['/', '/about', '/contact'];
 
    console.log("in0");
    try {

        
        if (!btoken) {
            console.log("in");

            req.data = { status: false };
            //return res.send({status:false})
            return res.send(req.data);    
            
        

            //authenticate user
            

        }
        else {
            const token = btoken.split(' ')[1];
            const decoded = jwt.verify(token, "shakespeare");
            console.log("decodeddddd", decoded);
            //console.log("yooooooooooooo",req);
            //req.status=true;
            if(!(req.baseUrl=="/authenticator")){
console.log("req path",req.path);
                console.log('naaaaaaaaaaa');
                req.data={status:true,userData:decoded};
                next();
            }else{
                return res.send({ status: true, data: decoded });
                console.log('haaaaaaaaaaa');
            }

        }
    }

    catch (e) {
        console.log("e", e);
        console.log("in2");
        return res.send({ status: false, data: 'jwt expired' })
    }
};
export default authenticate;