"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.once = void 0;
var once = function (cb) {
    var t;
    return function () {
        if (!t)
            t = cb();
        return t;
    };
};
exports.once = once;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93ZWItc2VydmVyL3V0aWxzL29uY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBTSxJQUFJLEdBQUcsVUFBSSxFQUFXO0lBQ3hCLElBQUksQ0FBZ0IsQ0FBQztJQUVyQixPQUFPO1FBQ0gsSUFBSSxDQUFDLENBQUM7WUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFFakIsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7QUFFTyxvQkFBSSJ9