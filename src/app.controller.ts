import { Controller, Get, Render, Session, } from '@nestjs/common';
import { AppService } from './app.service';
import db from './db';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()

  @Render('index')

  index(@Session() session: Record<string, any>) {
    if (!session.dobas) {
      session.dobas = Math.floor(Math.random() * 100);
    }
    return { message: 'A szám: ' + session.dobas };
  }
}
