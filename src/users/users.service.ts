import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name)
        private readonly userModel: Model<User>,
    ) { }

    async createUser(userData: Partial<User>) {
        return await this.userModel.create(userData);
    }

    async findByEmail(email: string) {
        return await this.userModel.findOne({ email });
    }

    async findById(id: string) {
        return await this.userModel.findById(id);
    }
}
