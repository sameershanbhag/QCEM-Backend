/* *
*  Author : Sameer Shanbhag (801099638)
*  UserConnection – represents a connection object saved to the user profile ( associates a connection to a user profile) with the following properties:
*  Connection
*  rsvp
*  Any other fields you find necessary (optional).
*
*  Please note that the pseudocode provided is one way of implementing the requirements specified in the previous section. You can plan the logic and naming in your application as you see fit. as long as it satisfies the requirements.
*
* */


class UserConnection {

    constructor(id, RSVP, Connection, Seat) {
        this._id = id;
        this._RSVP = RSVP;
        this._Seat = Seat;
        this._ConnectionObject = Connection;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get RSVP() {
        return this._RSVP;
    }

    set RSVP(value) {
        this._RSVP = value;
    }

    get ConnectionObject() {
        return this._ConnectionObject;
    }

    set ConnectionObject(value) {
        this._ConnectionObject = value;
    }

    get Seat() {
        return this._Seat;
    }

    set Seat(value) {
        this._Seat = value;
    }
}

module.exports.UserConnection = UserConnection;
