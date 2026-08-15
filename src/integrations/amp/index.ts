import type {
  PluginAPI,
  Subscription,
  ToolCall,
  ToolCallEvent,
  ToolCallResult,
} from '@ampcode/plugin';
import { handleAmpToolCall } from '@/integrations/amp/tool-call';

type AmpPluginApi = {
  system: Pick<PluginAPI['system'], 'workspaceRoot'>;
  helpers: {
    filePathFromURI: PluginAPI['helpers']['filePathFromURI'];
    shellCommandFromToolCall: (
      event: ToolCall,
    ) => ReturnType<PluginAPI['helpers']['shellCommandFromToolCall']>;
  };
  on(event: 'tool.call', handler: (event: ToolCallEvent) => ToolCallResult): Subscription;
};

export default function ccSafetyNetAmpPlugin(amp: AmpPluginApi): void {
  amp.on('tool.call', (event) => handleAmpToolCall(event, amp));
}
