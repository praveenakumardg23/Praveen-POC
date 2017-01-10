"use strict";
var app_component_1 = require('../../components/app.component');
var testing_1 = require('@angular/router/testing');
var testing_2 = require('@angular/core/testing');
describe('AppComponent', function () {
    var comp;
    var fixture;
    beforeEach(testing_2.async(function () {
        testing_2.TestBed.configureTestingModule({
            imports: [testing_1.RouterTestingModule],
            declarations: [app_component_1.AppComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_2.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance;
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
});
//# sourceMappingURL=app.component.spec.js.map