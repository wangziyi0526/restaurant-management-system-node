import { Controller, Get, Post, Request, Query, Body } from '@nestjs/common';
import { GirlService } from './girl.service';
@Controller('girl')
export class GirlController {
  constructor(private girlService: GirlService) {}

  @Get()
  getGirls(): object {
    return this.girlService.getGirls();
  }

  @Post('/add')
  //   addGirl(@Request() req): object {
  //     return this.girlService.addGirl();
  //   }
  addGirl(@Body() body): object {
    console.log('body', body);
    return this.girlService.addGirl(body);
  }

  @Get('/getGirlById')
  //   getGirlById(@Request() req): any {
  //     console.log('req', req.query);
  //     //因为通过Get方式传递过来的是字符串，所有我们需要用parseInt转化为数字
  //     const id: number = parseInt(req.query.id);
  //     return this.girlService.getGirlById(id);
  //   }
  getGirlById(@Query() query): any {
    console.log('query', query);
    //因为通过Get方式传递过来的是字符串，所有我们需要用parseInt转化为数字
    const id: number = parseInt(query.id);
    return this.girlService.getGirlById(id);
  }
}
