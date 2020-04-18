
module.exports = async (event: any, context: any) => {
    let response;
    try {
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'successfully get resume'
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};