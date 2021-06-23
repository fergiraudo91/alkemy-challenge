import React from 'react';
import { mount } from 'enzyme';
import { DashboardRoutes } from '../../routers/DashboardRoutes';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import HeroState from '../../context/Heroes/HeroState';


describe('Testing <DashBoardRoutes />', () => {


    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Alkemy'
        }
    }

    const wrapper = mount(
        <HeroState>
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        </HeroState>);

    test('should display correctly and show the username', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-user').text().trim()).toBe(contextValue.user.name);

    });

})
