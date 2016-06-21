(function(){

  /* global module, inject */

  'use strict';

  describe('Controller: Catalog', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.catalog'));

    var ctrl;
    var scope;

    beforeEach(inject(function($controller, $injector){

      scope = $injector.get('$rootScope');

      ctrl = $controller('Catalog', {
        //add injectable services
      });

    }));

    it('should do nothing', function(){
      expect(true).toBe(false);
    });

  });
}());
