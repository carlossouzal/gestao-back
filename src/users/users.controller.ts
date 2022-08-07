import { Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Request } from '@nestjs/common';
import { Public } from 'src/app.decorator';
import * as bcrypt from 'bcrypt';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService){}
  
  @Get('profile')
  getProfile(@Request() req){
    return req.user;
  }

  @Public()
  @Delete(':id/delete')
  async delete(@Param('id') id: number){
    return await this.usersService.delete(id);
  }


  @Public()
  @Post('create')
  async create(@Request() req){
    const user = req.body;

    if(await this.usersService.findOne(user.email)){
      throw new HttpException('User already created!', HttpStatus.CONFLICT); 
    }

    user.password = await this.hashGenerator(user.password);

    const created = await this.usersService.create(req.body);
    delete created.password;

    return created;
  }

  async hashGenerator(password: string): Promise<string>{
    return await bcrypt.hash(password, await bcrypt.genSalt());
  }
}
