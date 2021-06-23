import React from 'react';
import { mount } from "enzyme";
import { LoginScreen } from "../../components/login/LoginScreen";
import { AuthContext } from '../../auth/AuthContext';
import '@testing-library/jest-dom';


describe('Testing <LoginScreen />', () => {
    const dispatch = jest.fn();
    const wrapper = mount(
        <AuthContext.Provider value={{dispatch}}>
            <LoginScreen />
        </AuthContext.Provider>
    );

    test('should show an error if the login data is incorrect', () => {

        const value = 'Hola mundo';
        const userInput = wrapper.find('#exampleInputEmail1');
        const passInput = wrapper.find('#exampleInputPassword1');
        userInput.simulate('change', {target: {value}});
        passInput.simulate('change', {target: {value}});
        const form = wrapper.find('form');
        form.simulate('submit');
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-danger').exists()).toBe(true);   
    });

});
