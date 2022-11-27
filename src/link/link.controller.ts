import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { Link } from './entities/link.entity';
import { LinkService } from './link.service';

// @ApiBearerAuth()
@ApiTags('link')
@Controller('link')
export class LinkController {
  constructor(private readonly linkService: LinkService) { }

  @Post()
  @ApiOperation({ summary: 'Create a link' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 210, description: 'Created.' })
  @ApiBody({ type: CreateLinkDto })
  create(@Body() createLinkDto: CreateLinkDto) {
    return this.linkService.create(createLinkDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The found records',
    type: [Link],
  })
  findAll() {
    return this.linkService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Link,
  })
  @ApiResponse({
    status: 200,
    description: 'The found records',
    type: Link,
  })
  findOne(@Param('id') id: string) {
    return this.linkService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
  })
  @ApiBody({ type: UpdateLinkDto })
  update(@Param('id') id: string, @Body() updateLinkDto: UpdateLinkDto) {
    return this.linkService.update(id, updateLinkDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
  })
  remove(@Param('id') id: string) {
    return this.linkService.remove(id);
  }
}
