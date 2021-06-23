import React from 'react';
import { mount } from "enzyme";
import { AppRouter } from "../../routers/AppRouter";
import { AuthContext } from '../../auth/AuthContext';

describe('Testing <AppRouter />', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <AppRouter />
        </AuthContext.Provider>
    )

    test('should show the login if it is not authenticated', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.login-screen').exists()).toBe(true);
    });


});
