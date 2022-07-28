// new relic doesn't support ES modules
// export const hello = async (event) => ({

exports.hello = async (event) => ({
    statusCode: 200,
    body: JSON.stringify(
        {
            message: 'SLS-Template',
            input: event,
        },
        null,
        2
    ),
});
