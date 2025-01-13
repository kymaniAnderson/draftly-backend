"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplatesService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let TemplatesService = class TemplatesService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async findAll() {
        return this.databaseService.template.findMany();
    }
    async findOne(id) {
        return this.databaseService.template.findUnique({
            where: {
                id,
            },
            include: { sections: true },
        });
    }
    async create(createTemplateDto) {
        return this.databaseService.template.create({
            data: {
                ...createTemplateDto,
                sections: {
                    create: createTemplateDto.sections,
                },
            },
            include: {
                sections: true,
            },
        });
    }
    async update(id, updateTemplateDto) {
        return this.databaseService.template.update({
            where: {
                id,
            },
            data: {
                ...updateTemplateDto,
                sections: {
                    create: updateTemplateDto.sections,
                },
            },
            include: {
                sections: true,
            },
        });
    }
    async remove(id) {
        return this.databaseService.template.delete({
            where: {
                id,
            },
        });
    }
};
exports.TemplatesService = TemplatesService;
exports.TemplatesService = TemplatesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], TemplatesService);
//# sourceMappingURL=templates.service.js.map