import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Res,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `this should return all coffees. Limit: ${limit}, offset: ${offset} `;
  }

  @Get(':id')
  findOne(@Param('id') id: String) {
    return `this should return the #${id} coffee`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: String, @Body() body) {
    return `this should update the #${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: String, @Body() body) {
    return `this should delete the #${id} coffee`;
  }
}
