import { NestMiddleware } from "@nestjs/common"
import { NextFunction } from "express";
import * as fs from 'fs'

export function  stats(req: Request, res: Response, next: NextFunction) {
  //Write to file
  const time = new Date().toISOString();
  const url = req.url;
  const data = time + ' ;' + url + '\n';
  fs.appendFile('stats.csv', data, (err) => {
    if (err) {
      console.log('Hiba történt!');
      console.log(err)
    }
  });
    
  next();
}
