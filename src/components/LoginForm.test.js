const LoginForm = require("./LoginForm")
// @ponicode
describe("loginUser", () => {
    let inst

    beforeEach(() => {
        inst = new LoginForm.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.loginUser()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("onLoginSuccess", () => {
    let inst

    beforeEach(() => {
        inst = new LoginForm.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.onLoginSuccess("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.onLoginSuccess(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("onSignupFail", () => {
    let inst

    beforeEach(() => {
        inst = new LoginForm.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.onSignupFail(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.onSignupFail(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.onSignupFail(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("onSignupSuccess", () => {
    let inst

    beforeEach(() => {
        inst = new LoginForm.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.onSignupSuccess("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.onSignupSuccess(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
