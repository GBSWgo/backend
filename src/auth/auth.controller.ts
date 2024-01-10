import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { ApiCookieAuth, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'
import { AuthGuard } from './auth.guard'
import { EmailByPasswordDto } from './dto/EmailByPasswordDto'

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor (
    private readonly authService: AuthService,
    // private readonly usersService: UsersService
  ) {}

  @Get('/status')
  @UseGuards(AuthGuard)
  @ApiCookieAuth()
  public getLoginStatus (@Res({ passthrough: true }) res: Response) {
    const userId = res.locals.userId

    return {
      success: true,
      body: {
        userId
      }
    }
  }

  @Post('/by-pass')
  public async loginByPassword (@Res({ passthrough: true }) res: Response, @Body() body: EmailByPasswordDto) {
    const token = await this.authService.loginByPassword(body)
    res.cookie('TOKEN', token)

    return {
      success: true
    }
  }
}