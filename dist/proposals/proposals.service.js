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
exports.ProposalsService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let ProposalsService = class ProposalsService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async findAll() {
        return this.databaseService.proposal.findMany();
    }
    async findOne(id) {
        return this.databaseService.proposal.findUnique({
            where: {
                id,
            },
        });
    }
    async create(createProposalDto) {
        return this.databaseService.proposal.create({
            data: createProposalDto,
        });
    }
    async update(id, updateProposalDto) {
        return this.databaseService.template.update({
            where: {
                id,
            },
            data: updateProposalDto,
        });
    }
    async remove(id) {
        return this.databaseService.proposal.delete({
            where: {
                id,
            },
        });
    }
};
exports.ProposalsService = ProposalsService;
exports.ProposalsService = ProposalsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], ProposalsService);
//# sourceMappingURL=proposals.service.js.map