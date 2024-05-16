const ApiResponse = {

    pass: {
        create: 'Created successfully',
        added: 'Added successfully',
        update: 'Updated successfully',
        delete: 'Deleted successfully',
        removed: 'Removed successfully',
        read: 'Fetched successfully',
        register: 'Account created successfully',
        setup: 'Account setup successfully',
        send_otp: 'OTP has been resent. Kindly check email for OTP',
        verification_link: 'Kindly check your email for verification link',
        verify: 'Verification successful',
        login: 'LoggedIn successfully',
        invite: 'Invite Accepted',
        send_invite: 'Invitation Sent',
        sucess: "sucess",
        reset: "Password Reset Sucessful, Kindly check email for Further Instrution"
    },

    fail: {
        bad_request: 'Bad Request',
        conflict: 'Data Already exist',
        unauthorized: 'Unauthorized',
        adminUnauthorized: 'Admin Unauthorized',
        not_found: 'Not Found',
        server: 'Internal Server Error',
        forbidden: 'Forbidden',
        account_conflict: 'Account Already Exist',
        incorrect_otp: "OTP is incorrect",
        expired_token: "OTP Expired",
        no_user: "User does not exist",
        teacher: "Teachers Account Not Found",
        student: "Student Account Not Found",
        school: "School Account Not Found",
        login: "Email or Password don't match",
        verify: "Account Not Verified",
        school_setup: "Can't setup a school with this account type",
        school_duplicate: "School already setup",
        invite: 'Invite Not accepted yet',
        accepted: 'Invite Already Accepted',
        invalid: 'Invalid API key',
        disabled: 'API Disabled',
        secret: 'Invalid API secret'
    },

    code: {
        create: 201,
        success: 200,
        no_content: 204,
        bad_request: 400,
        unauthorized: 401,
        forbidden: 403,
        not_found: 404,
        conflict: 409,
        server_error: 500,
    }

}

export default ApiResponse;
// module.exports = ApiResponse;


